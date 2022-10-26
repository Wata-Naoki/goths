import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CREATE_ARTICLE, GET_BLOG_USER } from "../../queries/queries";

import {
  BlogUserQuery,
  CreateArticleOneMutation,
} from "../../types/generated/graphql.tsx/graphql";
import { BlogHeader } from "../header/BlogHeader";
import { Header } from "../header/SearchHeader";
import { Loading } from "../Loading/Loading";
import { Quote } from "../Quote/Quote";
import { Sidebar } from "../sidebar/navbar";

export const AdminBlogsIdArticlesCreate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [allText, setAllText] = useState();

  const { data, loading } = useQuery<BlogUserQuery>(GET_BLOG_USER, {
    variables: { id: id },
  });
  //console.log(data?.blog_user[0].user_id);

  const [insert_Article_one, { loading: articleLoading, error }] =
    useMutation<CreateArticleOneMutation>(CREATE_ARTICLE);

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleAllTextChange = (e: any) => {
    setAllText(e.target.value);
    //console.log(allText);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
        alert("記事が作成されました");
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  if (loading || articleLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* <div>AdminBlogsIdArticlesCreate</div> */}

      <div>
        <BlogHeader />
      </div>

      <div className="flex justify-start w-full  ">
        <div className="w-1/5">
          <Sidebar />
        </div>

        <div className="w-4/5 mt-16 mr-12">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mt-5 ">
              <div className="w-2/5 ">
                <div>
                  <div className="text-sm text-gray-500 mb-2">タイトル</div>
                  <div className="my-1">
                    <input
                      type="text"
                      id=""
                      value={title}
                      onChange={handleTitleChange}
                      name="title"
                      className="ml-2 pl-4 py-1 pr-4 text-left border border-slate-300 rounded focus:outline-0   w-full "
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mt-8">概要</div>
                  <div className="my-1 w-full">
                    <textarea
                      rows={1}
                      id=""
                      name="content"
                      value={text}
                      onChange={handleTextChange}
                      className="text-sm whitespace-normal text-left border border-slate-300 rounded focus:outline-0 pl-4 pt-2 pr-4 pb-24 w-full "
                    ></textarea>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mt-8">内容</div>
                  <div className="my-1 w-full">
                    <textarea
                      rows={4}
                      id=""
                      name="content"
                      value={allText}
                      onChange={handleAllTextChange}
                      className="text-sm whitespace-normal text-left border border-slate-300 rounded focus:outline-0 pl-4 pt-2 pr-4 pb-24 w-full "
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-center mt-10 items-center">
                  <div>
                    <div className="flex flex-wrap items-stretch ">
                      <div className="relative flex items-center ">
                        <svg
                          className="h-4 w-4 text-white absolute ml-2.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>

                      <button
                        type="submit"
                        className=" bg-emerald-700 text-white text-sm py-1.5  pr-4 pl-8  font-medium rounded"
                      >
                        作成
                      </button>
                    </div>
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
