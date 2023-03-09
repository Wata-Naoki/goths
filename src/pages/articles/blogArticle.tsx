import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/SearchHeader";
import { GET_ARTICLES, GET_BLOGS } from "../../queries";
import { Loading } from "../../components/loading/Loading";
import { formatJst } from "../../components/formatJst/FormatJst";
import { Pagination } from "../../components/ui/pagination/pagination";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { usePagination } from "../../hooks/usePagination";
import { FullPagination } from "../../components/ui/pagination/FullPagination";

// TODO: さらに読み込むのところデータがないときは非表示にする
export const BlogArticle = () => {
  const [page, setPage] = useState<"新着記事" | "新着ブログ">("新着記事");
  const navigate = useNavigate();
  const [num, setNum] = useState(2);
  const { userValue, setUserValue } = useLocalStorage();

  const [
    execute,
    { data: articleData, error: articleError, loading: articleLoading },
  ] = useLazyQuery(GET_ARTICLES);

  const onClickFetch = () => {
    setNum(num + 2);
  };

  const [numblog, setNumBlog] = useState(2);

  const [
    executeBlog,
    { data: blogData, error: blogError, loading: blogLoading },
  ] = useLazyQuery(GET_BLOGS);

  const onClickFetchBlog = () => {
    setNumBlog(numblog + 2);
  };

  const {
    take,
    skip,
    totalCount,
    currentPage,
    totalPage,
    goNext,
    goPrev,
    goPage,
    hasNextPage,
    hasPrevPage,
  } = usePagination({
    totalCount: blogData?.Blog_aggregate?.aggregate?.count || 0,
  });

  const {
    take: takeArticle,
    skip: skipArticle,
    totalCount: totalCountArticle,
    currentPage: currentPageArticle,
    totalPage: totalPageArticle,
    goNext: goNextArticle,
    goPrev: goPrevArticle,
    goPage: goPageArticle,
    hasNextPage: hasNextPageArticle,
    hasPrevPage: hasPrevPageArticle,
  } = usePagination({
    totalCount: articleData?.Article_aggregate?.aggregate?.count || 0,
  });
  //  記事のpaginationで再度クエリを実行するために必要
  useEffect(() => {
    execute({
      variables: { limit: takeArticle, offset: skipArticle },
    });
  }, [takeArticle, currentPageArticle]);

  // ブログのpaginationで再度クエリを実行するために必要
  useEffect(() => {
    executeBlog({
      variables: { limit: take, offset: skip },
    });
  }, [take, currentPage]);
  if (articleLoading || blogLoading) {
    return <Loading />;
  }

  if (!userValue.email) navigate("/authentication");

  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className="flex justify-center w-full">
        <div className="w-2/5 max-w-3xl 2xl:w-1/4">
          <div className="flex justify-center mb-2">
            <button
              className={`mr-8 ${
                page === "新着記事"
                  ? "text-green-700 underline underline-offset-8 decoration-1 "
                  : "text-black"
              }`}
              onClick={() => {
                setPage("新着記事");
                navigate("/");
              }}
            >
              新着記事
            </button>

            <button
              className={`mr-8 ${
                page === "新着ブログ"
                  ? "text-green-700 underline underline-offset-8 decoration-1 "
                  : "text-black"
              }`}
              onClick={() => {
                setPage("新着ブログ");
                navigate("/");
              }}
            >
              新着ブログ
            </button>
          </div>

          {page === "新着記事" ? (
            <div>
              {articleData?.Article.map((x: any) => (
                <div key={x.id} className="my-8 2xl:my-16">
                  <Link
                    to={`/blogs/articles/${x.id}`}
                    className="text-2xl hover:text-gray-500"
                  >
                    {x.title}
                  </Link>

                  <div className="flex justify-between my-2 text-gray-500">
                    <h3>{x.Blog.title}</h3>
                    <h3 className="mr-4 text-gray-500">
                      {formatJst(x.createdAt)}
                    </h3>
                  </div>

                  <p>{x.text}</p>
                </div>
              ))}
              <div className="flex justify-center mt-14 mb-10 mr-4 w-full mx-4">
                <div>
                  <FullPagination
                    totalPage={totalPageArticle}
                    onPageClick={(page) => goPageArticle(page)}
                    currentPage={currentPageArticle}
                    onNextClick={goNextArticle}
                    onPrevClick={goPrevArticle}
                    showNext={hasNextPageArticle}
                    showPrev={hasPrevPageArticle}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              {blogData?.Blog.map((x: any) => (
                <div
                  key={x.id}
                  className="flex items-center justify-between my-8 2xl:my-16"
                >
                  <div>
                    <h2 className="text-2xl">{x.title}</h2>
                    <h3 className="my-2 text-gray-500">
                      {x?.blog_users[0]?.User?.name}
                    </h3>
                  </div>
                  <Link to={`/blogs/${x.id}/articles`}>
                    <div className="flex items-center justify-center">
                      <div className="text-green-600">ブログ記事を見る </div>
                      <svg
                        className="w-5 h-5 text-green-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </div>
                  </Link>
                </div>
              ))}

              <div className="flex justify-center mt-10 mb-10 mr-4 ">
                <div className="">
                  <FullPagination
                    totalPage={totalPage}
                    onPageClick={(num) => goPage(num)}
                    currentPage={currentPage}
                    onNextClick={goNext}
                    onPrevClick={goPrev}
                    showNext={hasNextPage}
                    showPrev={hasPrevPage}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
