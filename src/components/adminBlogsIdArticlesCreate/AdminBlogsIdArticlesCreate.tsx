import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CREATE_ARTICLE,
  GET_BLOG_ARTICLES,
  GET_BLOG_USER,
} from "../../queries";
import {
  BlogUserQuery,
  CreateArticleOneMutation,
} from "../../types/generated/graphql.tsx/graphql";
import { BlogHeader } from "../header/BlogHeader";
import { useToast } from "../loading/useToast";
import { Quote } from "../quote/Quote";
import { Sidebar } from "../sidebar/navbar";

export const AdminBlogsIdArticlesCreate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [allText, setAllText] = useState();
  const { toastLoading, toastSucceeded, toastFailed } = useToast();
  const [
    execute,
    {
      data: blogArticlesData,
      loading: blogArticlesDataLoading,
      error: blogArticlesDataError,
      refetch: blogArticlesDataRefetch,
    },
  ] = useLazyQuery(GET_BLOG_ARTICLES, { variables: { id: id } });

  const { data, loading, refetch } = useQuery<BlogUserQuery>(GET_BLOG_USER, {
    variables: { id: id },
  });

  const [insert_Article_one, { loading: articleLoading, error }] =
    useMutation<CreateArticleOneMutation>(CREATE_ARTICLE, {
      onCompleted: () => {
        toastSucceeded();
        refetch();
        blogArticlesDataRefetch();
      },
      onError: () => {
        toastFailed();
      },
    });

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleAllTextChange = (e: any) => {
    setAllText(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    toastLoading();
    if (id) {
      try {
        await insert_Article_one({
          variables: {
            title: title,
            text: text,
            user_id: data?.blog_user[0].user_id,
            blog_id: id,
            all_text: allText,
          },
        });

        //alert("記事が作成されました");
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  return (
    <>
      {/* <div>AdminBlogsIdArticlesCreate</div> */}

      <div>
        <BlogHeader />
      </div>

      <div className="flex justify-start w-full ">
        <div className="w-1/5">
          <Sidebar />
        </div>

        <div className="w-4/5 mt-5 mr-12">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mt-5 ">
              <div className="w-2/5 ">
                <div>
                  <div className="mb-2 text-sm text-gray-500">タイトル</div>
                  <div className="my-1">
                    <input
                      type="text"
                      id=""
                      value={title}
                      onChange={handleTitleChange}
                      name="title"
                      className="w-full py-1 pl-4 pr-4 ml-2 text-left border rounded border-slate-300 focus:outline-0 "
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="mt-8 text-sm text-gray-500">概要</div>
                  <div className="w-full my-1">
                    <textarea
                      rows={1}
                      id=""
                      name="content"
                      value={text}
                      onChange={handleTextChange}
                      className="w-full pt-2 pb-24 pl-4 pr-4 text-sm text-left whitespace-normal border rounded border-slate-300 focus:outline-0 "
                    ></textarea>
                  </div>
                </div>

                <div>
                  <div className="mt-8 text-sm text-gray-500">内容</div>
                  <div className="w-full my-1">
                    <textarea
                      rows={4}
                      id=""
                      name="content"
                      value={allText}
                      onChange={handleAllTextChange}
                      className="w-full pt-2 pb-24 pl-4 pr-4 text-sm text-left whitespace-normal border rounded border-slate-300 focus:outline-0 "
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-10">
                  <div>
                    <button
                      className="flex flex-wrap items-stretch disabled:cursor-not-allowed "
                      type="submit"
                      disabled={
                        articleLoading ||
                        blogArticlesDataLoading ||
                        loading ||
                        !title ||
                        !text ||
                        !allText
                      }
                    >
                      <div className="relative flex items-center ">
                        <svg
                          className="h-4 w-4 text-white absolute ml-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>

                      <div className=" bg-emerald-700 text-white text-sm py-1.5  pr-4 pl-8  font-medium rounded">
                        作成
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-end mr-12 mt-96">
          <div className="mt-64">
            <Quote />
          </div>
        </div>
      </div>
    </>
  );
};
