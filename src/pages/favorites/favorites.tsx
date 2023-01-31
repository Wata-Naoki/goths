import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/header/SearchHeader";
import { useAuthContext } from "../../AuthContext";
import { GET_USER, GET_USER_FAVORITES_ARTICLES } from "../../queries";
import {
  GetUserFavoritesArticlesQuery,
  GetUserQuery,
} from "../../types/generated/graphql.tsx/graphql";
import { formatJst } from "../../components/formatJst/FormatJst";
import { Pagination } from "../../components/ui/pagination/pagination";
import { ArticleLoading } from "../../components/loading/ArticleLoading";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Favorites = () => {
  const { id, articleId } = useParams();

  const [numblog, setNumBlog] = useState<number>(2);
  const { userValue, setUserValue } = useLocalStorage();

  const [
    executeUserFavorite,
    {
      data: userFavoriteData,
      error: userFavoriteError,
      loading: userFavoriteLoading,
      refetch: userFavoriteRefetch,
    },
  ] = useLazyQuery<GetUserFavoritesArticlesQuery>(GET_USER_FAVORITES_ARTICLES);

  const {
    data: userData,
    error: userDataError,
    loading: userDataLoading,
    refetch: userDataRefetch,
  } = useQuery<GetUserQuery>(GET_USER, {
    variables: { email: userValue?.email },
  });

  useEffect(() => {
    // if (id='1bf773a5-9c62-43bc-b5ce-43633fdb3b14') {
    if (userData) {
      // excute({ variables: { id: userData?.User[0]?.id, limit: numblog } });
      executeUserFavorite({
        variables: { id: userData?.User[0]?.id, limit: numblog },
      });
    }
  }, [numblog, userData]);

  const onClickFetchBlog = () => {
    setNumBlog(numblog + 1);
  };

  // if (userFavoriteLoading) {
  //   return <SectionLoading />;
  // }

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="w-2/5 2xl:w-1/4">
          <div>
            <div className="flex justify-center">
              <div>お気に入り</div>
            </div>
            {userFavoriteLoading ? (
              <ArticleLoading />
            ) : (
              <>
                <div>
                  {userFavoriteData?.Article?.map((x: any) => (
                    <div key={x.id} className="2xl:my-16">
                      <div className="my-8">
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
                    </div>
                  ))}
                </div>
                <div className="flex justify-center my-10">
                  <Pagination onClickFetchBlog={onClickFetchBlog} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
