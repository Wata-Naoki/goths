import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { Header } from "../header/SearchHeader";

import { Link, useParams } from "react-router-dom";
import { GET_SEARCH_ARTICLES } from "../../queries";
import { formatJst } from "../formatJst/FormatJst";
import { Loading } from "../loading/Loading";
import { Pagination } from "../ui/pagination/pagination";

// mswのmock
// const SEARCHE_QUERY = gql`
//   query search {
//     search {
//       mockSearch {
//         title
//         users
//         createAt
//         text
//       }
//     }
//   }
// `;

const Searches = () => {
  const { text } = useParams();
  const [pageNum, setPageNum] = React.useState<number>(1);

  const [
    excute,
    {
      data: searchResultData,
      loading: searchResultLoading,
      error: searchResultError,
    },
  ] = useLazyQuery(GET_SEARCH_ARTICLES, {
    variables: { _iregex: text, limit: pageNum },
  });

  const onClickFetchBlog = () => {
    setPageNum((prev) => prev + 1);
  };

  useEffect(() => {
    excute();
  }, [text, pageNum]);
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="w-2/5 ">
          <div>
            <div className="flex justify-center">
              <div>"{text}"の検索結果</div>
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
              <Pagination onClickFetchBlog={onClickFetchBlog} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searches;
