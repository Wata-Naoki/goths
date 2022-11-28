import React, { useEffect, useRef, useState } from "react";
import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/SearchHeader";
import {
  DELETE_FAVORITE_ARTICLE,
  GET_ARTICLE,
  GET_FAVORITES_ARTICLES,
  UPDATE_ARTICLE_LIKE,
  UPDATE_FAVORITES_ARTICLES,
} from "../../queries/queries";
import { Loading } from "../../components/Loading/Loading";
import { formatJst } from "../../components/FormatJst/FormatJst";
import {
  GetFavoritesArticlesQuery,
  UpdateArticleLikeMutation,
} from "../../types/generated/graphql.tsx/graphql";
import { useToast } from "../../components/Loading/useToast";
import { SectionLoading } from "../../components/Loading/SectionLoading";
import { useAuthContext } from "../../AuthContext";

const BLOGIDARTICLESID_QUERY = gql`
  query article {
    article {
      mockBlogsIdArticles {
        articleId
        blog
        title
        user
        createdAt
        text
        tags
      }
    }
  }
`;

const BlogIdArticleId = () => {
  const { loading, error, data } = useQuery(BLOGIDARTICLESID_QUERY);
  const { articleId } = useParams();
  const { user } = useAuthContext();
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

    excute({ variables: { email: user?.email } });
  }, [user.email]);

  const {
    data: articleData,
    loading: articeDataLoading,
    error: articeDataError,
    refetch,
  } = useQuery(GET_ARTICLE, { variables: { id: articleId } });
  /* const targetArticle = data?.article.data.find(
    (x: any) => x.articleId === articleId
  ); */
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  const [update_Article_by_pk, { loading: likeLoading, error: likeError }] =
    useMutation<UpdateArticleLikeMutation>(UPDATE_ARTICLE_LIKE, {
      onCompleted: () => {
        console.log("いいねしました");
        refetch();
        refetchFavorite();
        toastSucceeded();
      },
      onError: () => {
        console.log("いいねできませんでした");
        toastFailed();
      },
    });

  // useEffect(() => {
  //   if (!favoriteData?.Article.find((x) => x.id === articleId)) {
  //     like.current = true;
  //     console.log(like.current);
  //   } else {
  //     like.current = false;
  //     console.log(like.current);
  //   }
  // }, [like]);

  const handleLike = async () => {
    //favoriteDataにarticleIdがあるかどうかで処理を分ける
    toastLoading();

    if (!favoriteData?.Article?.find((x) => x.id === articleId)) {
      //likeの値が変わったら、update_Article_by_pkを実行する

      //
      await update_Article_by_pk({
        variables: {
          id: articleId,
          like: articleData?.Article[0].like + 1,
          user_favorite_articles_id: user?.email,
          status: true,
        },
      });
    } else {
      await update_Article_by_pk({
        variables: {
          id: articleId,
          like: articleData?.Article[0].like - 1,
          status: false,
        },
      });

      //TODO: addではなく、deleteを実行する
      // await add_favorites({
      //   variables: {
      //     id: articleId,
      //     status: false,
      //   },
      // });
    }
  };

  if (articeDataLoading) {
    return <Loading />;
  }

  console.log(articleData);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-2/5">
          <div>
            <div className="flex justify-center mb-6 text-xl">
              <div>{articleData?.Article[0].Blog.title}</div>
            </div>
            <div className="text-2xl">{articleData?.Article[0].title}</div>
            <div className="flex justify-between mt-6 mb-8 text-gray-500">
              <div className="text-gray-500">
                {articleData?.Article[0].User.name}
              </div>
              <div className="mr-4 text-gray-500">
                {formatJst(articleData?.Article[0].createdAt)}
              </div>
            </div>
            <p className="mb-5">{articleData?.Article[0].all_text}</p>

            <div className="items-center justify-end inline-block float-right w-auto mt-5 text-gray-500 ">
              <button
                className="flex items-center"
                onClick={() => handleLike()}
              >
                <div>
                  <svg
                    className={`w-5 h-5   ${
                      favoriteData?.Article?.find((x) => x.id === articleId)
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </div>
                <div>{articleData?.Article[0]?.like}</div>
              </button>
              {/* <div>{targetArticle?.tags}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIdArticleId;
