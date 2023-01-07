import React, { useEffect, useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Form } from "../articles/blogArticle";
import { Header } from "../../components/header/SearchHeader";
import { useAuthContext } from "../../AuthContext";
import {
  GET_FAVORITES_ARTICLES,
  GET_USER,
  GET_USER_BLOGS,
} from "../../queries";
import {
  GetFavoritesArticlesQuery,
  GetUserQuery,
} from "../../types/generated/graphql.tsx/graphql";
import { Loading } from "../../components/loading/Loading";
import { formatJst } from "../../components/formatJst/FormatJst";
import { Pagination } from "../../components/ui/pagination/pagination";

// const FAVORITES_QUERY = gql`
//   query favoriteArticles {
//     favoriteArticles {
//       mockFavoriteArticles {
//         title
//         users
//         createAt
//         text
//       }
//     }
//   }

// `;

// user?.emailの型をuuidにする
// const GET_FAVORITES_ARTICLES_QUERY = gql`
//   query GetFavoritesArticles($email: uuid!) {
//     Article(where: { users: { email: { _eq: $email } } }) {
//       id
//       title
//       text
//       createdAt
//       Blog {
//         title
//       }

const Favorites = () => {
  // const { loading, error, data } = useQuery(FAVORITES_QUERY);
  const { id, articleId } = useParams();
  const { user } = useAuthContext();
  const [numblog, setNumBlog] = useState<number>(2);

  //GET_FAVORITES_ARTICLES_QUERY

  const {
    data: userData,
    error: userDataError,
    loading: userDataLoading,
    refetch: userDataRefetch,
  } = useQuery<GetUserQuery>(GET_USER, {
    variables: { email: user?.email },
  });

  const [
    excute,
    {
      data: favoriteData,
      error: favoriteError,
      loading: favoriteLoading,
      refetch: refetchFavorite,
    },
  ] = useLazyQuery<GetFavoritesArticlesQuery>(GET_FAVORITES_ARTICLES);

  useEffect(() => {
    // if (id='1bf773a5-9c62-43bc-b5ce-43633fdb3b14') {
    if (userData) {
      excute({ variables: { id: userData?.User[0]?.id, limit: numblog } });
    }
  }, [numblog, userData]);

  const onClickFetchBlog = () => {
    setNumBlog(numblog + 1);
  };

  if (favoriteLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="w-2/5">
          <div>
            <div className="flex justify-center">
              <div>お気に入り</div>
            </div>

            <div>
              {favoriteData?.Article?.map((x: any) => (
                <div key={x.id}>
                  <div className="my-8">
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
                </div>
              ))}
            </div>

            <div className="flex justify-center my-10">
              <Pagination onClickFetchBlog={onClickFetchBlog} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
