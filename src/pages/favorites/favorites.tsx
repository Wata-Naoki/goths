import React, { useEffect, useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Form } from "../Articles/blogArticle";
import { Header } from "../../components/header/SearchHeader";
import { useAuthContext } from "../../AuthContext";
import { GET_FAVORITES_ARTICLES, GET_USER_BLOGS } from "../../queries/queries";
import { GetFavoritesArticlesQuery } from "../../types/generated/graphql.tsx/graphql";
import { Loading } from "../../components/Loading/Loading";
import { formatJst } from "../../components/FormatJst/FormatJst";

const FAVORITES_QUERY = gql`
  query favoriteArticles {
    favoriteArticles {
      mockFavoriteArticles {
        title
        users
        createAt
        text
      }
    }
  }
`;
const Favorites = () => {
  const { loading, error, data } = useQuery(FAVORITES_QUERY);
  const { id, articleId } = useParams();
  const { user } = useAuthContext();
  const [numblog, setNumBlog] = useState<number>(2);

  //GET_FAVORITES_ARTICLES_QUERY
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
    console.log(user.email);

    excute({ variables: { email: user?.email, limit: numblog } });
  }, [numblog]);

  // console.log(data);
  // console.log(id, articleId);
  const onClickFetchBlog = () => {
    setNumBlog(numblog + 1);
    //console.log(num);
  };

  if (favoriteLoading) {
    return <Loading />;
  }

  console.log(favoriteData);

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
              <button
                type="button"
                onClick={onClickFetchBlog}
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

export default Favorites;
