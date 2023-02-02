import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/SearchHeader";
import {
  CREATE_USER_FAVORITES_ARTICLES,
  DELETE_USER_FAVORITES_ARTICLES,
  GET_ARTICLE,
  GET_USER_FAVORITES_ARTICLE_TABLE,
} from "../../queries";
import { formatJst } from "../../components/formatJst/FormatJst";
import Lottie from "react-lottie";
import { useToast } from "../../components/loading/useToast";
import { useAuthContext } from "../../AuthContext";
import * as animationData from "../../components/ui/heart/heart.json";
import {
  CreateUserFavoriteArticlesMutation,
  DeleteUserFavoriteArticlesMutation,
} from "../../types/generated/graphql.tsx/graphql";
import { ArticleLoading } from "../../components/loading/ArticleLoading";

export const BlogIdArticleId = () => {
  const { articleId } = useParams();
  const { user, userData } = useAuthContext();

  const {
    data: articleData,
    loading: articleDataLoading,
    error: articeDataError,
    refetch,
  } = useQuery(GET_ARTICLE, { variables: { id: articleId } });
  /* const targetArticle = data?.article.data.find(
    (x: any) => x.articleId === articleId
  ); */
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  const { data: favoriteData, refetch: refetchFavorite } = useQuery(
    GET_USER_FAVORITES_ARTICLE_TABLE,
    {
      variables: {
        id: userData?.User[0]?.id,
      },
    }
  );
  const [lottieState, setLottieState] = useState({
    isStopped: true,
    isPaused: false,
  });
  useEffect(() => {
    if (
      favoriteData?.user_favorite_article_id?.find(
        (x: any) => x?.article_id === articleId
      )
    ) {
      setLottieState({
        isStopped: false,
        isPaused: false,
      });
    } else {
      setLottieState({
        isStopped: true,
        isPaused: false,
      });
    }
  }, [favoriteData, articleData]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // CREATE_USER_FAVORITES_ARTICLES
  const [add_favorites, { loading: addLoading, error: addError }] =
    useMutation<CreateUserFavoriteArticlesMutation>(
      CREATE_USER_FAVORITES_ARTICLES,
      {
        onCompleted: () => {
          ("お気に入りに追加しました");
          refetch();
          refetchFavorite();
          // toastSucceeded();
        },
        onError: () => {
          ("お気に入りに追加できませんでした");
          toastFailed();
        },
      }
    );

  // DELETE_USER_FAVORITES_ARTICLES
  const [delete_favorites, { loading: deleteLoading, error: deleteError }] =
    useMutation<DeleteUserFavoriteArticlesMutation>(
      DELETE_USER_FAVORITES_ARTICLES,
      {
        onCompleted: () => {
          ("お気に入りから削除しました");
          refetch();
          refetchFavorite();
          // toastSucceeded();
        },
        onError: () => {
          ("お気に入りから削除できませんでした");
          toastFailed();
        },
      }
    );

  const handleLottie = async (id: any) => {
    // toastLoading();

    setLottieState({
      isStopped: !lottieState.isStopped,
      isPaused: false,
    });
    if (
      !favoriteData?.user_favorite_article_id?.find(
        (x: any) => x.article_id === id
      )
    ) {
      await add_favorites({
        variables: {
          article_id: articleId,
          user_id: userData?.User[0]?.id,
        },
      });
    } else {
      await delete_favorites({
        variables: {
          id: favoriteData?.user_favorite_article_id?.find(
            (x: any) => x.article_id === id
          ).id,
        },
      });
    }
  };

  // findでfavoriteDataがあるかどうかを判定する

  //loading
  if (articleDataLoading) return <ArticleLoading />;

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center mb-10">
        <div className="w-2/5 2xl:w-1/4">
          <div className="w-full">
            <div className="flex justify-center mb-6 text-xl 2xl:mt-8 2xl:mb-12">
              <div>{articleData?.Article[0].Blog.title}</div>
            </div>
            <div className="my-10 text-2xl">
              {articleData?.Article[0].title}
            </div>
            <div className="flex justify-between mt-6 mb-8 text-gray-500">
              <div className="text-gray-500">
                {articleData?.Article[0].User.name}
              </div>
              <div className="mr-4 text-gray-500">
                {formatJst(articleData?.Article[0].createdAt)}
              </div>
            </div>
            <p className="mt-16 whitespace-pre-wrap">
              {articleData?.Article[0].all_text}
            </p>

            <div className="flex items-center justify-end w-full mt-5 ml-16 text-gray-500 ">
              <button
                type="button"
                className={`${
                  addLoading || deleteLoading ? "" : "cursor-not-allowed"
                }`}
                disabled={addLoading || deleteLoading}
                onClick={() => handleLottie(articleData?.Article[0].id)}
              >
                {/* <div>{articleData?.Article[0]?.like}</div> */}
                <Lottie
                  options={defaultOptions}
                  isPaused={addLoading || deleteLoading ? true : false}
                  isStopped={
                    !favoriteData?.user_favorite_article_id?.find(
                      (x: any) => x.article_id === articleId
                    )
                      ? true
                      : false
                  }
                  height={200}
                  width={200}
                />
              </button>
              {/* <div>{targetArticle?.tags}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
