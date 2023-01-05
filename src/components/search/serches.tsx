import React, { useContext, useEffect } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Form } from "../../pages/Articles/blogArticle";
import { Header } from "../header/SearchHeader";

import { Link, useLocation, useParams } from "react-router-dom";
import { GET_ARTICLES, GET_SEARCH_ARTICLES, GET_USER } from "../../queries";
import { formatJst } from "../FormatJst/FormatJst";
import { Loading } from "../Loading/Loading";

const SEARCHE_QUERY = gql`
  query search {
    search {
      mockSearch {
        title
        users
        createAt
        text
      }
    }
  }
`;

const Searches = () => {
  const { data, loading, error } = useQuery(GET_ARTICLES);

  const { text } = useParams();
  const location = useLocation();
  // console.log(location.state.text);
  // const [search, setSearch] = React.useState<string>(location.state.text);
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

  useEffect(() => {
    excute();
  }, [text, pageNum]);
  console.log(searchResultData);
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
              <button
                type="button"
                onClick={() => {
                  setPageNum(pageNum + 1);
                }}
                className="px-4 py-2 text-sm font-medium text-white rounded bg-emerald-700"
              >
                さらに読み込む
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searches;
