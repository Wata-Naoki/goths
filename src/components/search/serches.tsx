import React, { useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Header } from "../header/SearchHeader";
import { Link, useParams } from "react-router-dom";
import { GET_SEARCH_ARTICLES } from "../../queries";
import { formatJst } from "../formatJst/FormatJst";
import { Loading } from "../loading/Loading";
import { Pagination } from "../ui/pagination/pagination";
import { usePagination } from "../../hooks/usePagination";
import { FullPagination } from "../ui/pagination/FullPagination";

const Searches = () => {
  const { text } = useParams();
  const [pageNum, setPageNum] = React.useState<number>(2);

  const { data, loading, error } = useQuery(GET_SEARCH_ARTICLES, {
    variables: { _iregex: text },
  });
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
    totalCount: data?.Article?.length || 0,
  });

  const [
    execute,
    {
      data: searchResultData,
      loading: searchResultLoading,
      error: searchResultError,
    },
  ] = useLazyQuery(GET_SEARCH_ARTICLES, {
    variables: { _iregex: text, limit: take, offset: skip },
  });

  const onClickFetchBlog = () => {
    setPageNum((prev) => prev + 2);
  };

  useEffect(() => {
    execute();
  }, [text, take, skip]);
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="w-2/5 max-w-3xl 2xl:w-1/4">
          <div>
            <div className="flex justify-center">
              <div>
                "{text}"の検索結果：{data?.Article?.length}件
              </div>
            </div>
            <div>
              {searchResultLoading ? (
                <Loading />
              ) : (
                searchResultData?.Article?.map((x: any) => (
                  <div key={x.id} className="">
                    <Link to={`/blogs/articles/${x.id}`}>
                      <h2 className="mt-8 text-xl hover:text-gray-500">
                        {x.title}
                      </h2>
                    </Link>

                    <div className="flex justify-between my-2 text-gray-500">
                      <h3>{x.users}</h3>
                      <h3 className="mr-4 text-gray-500">
                        {formatJst(x.createdAt)}
                      </h3>
                    </div>
                    <p>{x.text}</p>
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-center mt-10">
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
      </div>
    </>
  );
};

export default Searches;
