import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/SearchHeader";
import { GET_ARTICLES, GET_BLOGS } from "../../queries";
import { Loading } from "../../components/loading/Loading";
import { useAuthContext } from "../../AuthContext";
import { formatJst } from "../../components/formatJst/FormatJst";
import { Pagination } from "../../components/ui/pagination/pagination";

export const BlogArticle = () => {
  const { user } = useAuthContext();
  const [page, setPage] = useState<"新着記事" | "新着ブログ">("新着記事");
  const navigate = useNavigate();
  const [num, setNum] = useState(2);

  const [
    execute,
    { data: articleData, error: articleError, loading: articleLoading },
  ] = useLazyQuery(GET_ARTICLES);

  const onClickFetch = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    execute({
      variables: { limit: num },
    });
  }, [execute, num]);

  const [numblog, setNumBlog] = useState(2);

  const [
    executeBlog,
    { data: blogData, error: blogError, loading: blogLoading },
  ] = useLazyQuery(GET_BLOGS);

  const onClickFetchBlog = () => {
    setNumBlog(numblog + 1);
  };

  useEffect(() => {
    executeBlog({
      variables: { limit: numblog },
    });
  }, [executeBlog, numblog]);

  if (articleLoading || blogLoading) {
    return <Loading />;
  }

  if (!user) {
    navigate("/authentication");
    return (
      <>
        <Link to={"/login"} className="text-blue-900 underline">
          ログイン
        </Link>
        してください
      </>
    );
  } else {
    return (
      <div className="">
        <div>
          <Header />
        </div>

        <div className="flex justify-center w-full">
          <div className="w-2/5">
            <div className="flex justify-center mb-2">
              <button
                className={`mr-8 ${
                  page === "新着記事"
                    ? "text-green-700 underline underline-offset-8 decoration-1 "
                    : "text-black"
                }`}
                onClick={() => {
                  setPage("新着記事");
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
                }}
              >
                新着ブログ
              </button>
            </div>

            {page === "新着記事" ? (
              <div>
                {articleData?.Article.map((x: any) => (
                  <div key={x.id} className="my-8">
                    <Link
                      to={`/blogs/articles/${x.id}`}
                      className="hover:text-gray-500"
                    >
                      <h2 className="text-2xl">{x.title}</h2>
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
                <div className="flex justify-center mt-10 mb-10 mr-4">
                  <Pagination onClickFetchBlog={onClickFetch} />
                </div>
              </div>
            ) : (
              <div>
                {blogData?.Blog.map((x: any) => (
                  <div
                    key={x.id}
                    className="flex items-center justify-between my-8 "
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

                <div className="flex justify-center mt-10 mb-10 mr-4">
                  <Pagination onClickFetchBlog={onClickFetchBlog} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};
