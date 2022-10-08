import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { BlogHeader } from "../header/BlogHeader";
import { Header } from "../header/SearchHeader";
import { Quote } from "../Quote/Quote";
import { Sidebar } from "../sidebar/navbar";

const CREATE_ARTICLE = gql`
  mutation CreateArticle($input: input!) {
    CreateArticle(input: $input) {
      title
      content
    }
  }
`;

export const AdminBlogsIdArticlesCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [createArticle, { loading, error }] = useMutation(CREATE_ARTICLE);

  const handleSubmit = () => {
    createArticle({
      variables: {
        input: {
          title: title,
          content: content,
        },
      },
    });
  };

  return (
    <>
      {/* <div>AdminBlogsIdArticlesCreate</div> */}

      <div>
        <BlogHeader />
      </div>

      <div>
        <Sidebar />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex justify-center mt-5 ml-24 h-full">
          <div className="w-2/5 ">
            <div>
              <div className="text-sm text-gray-500 mb-2">タイトル</div>
              <div className="my-1">
                <input
                  type="text"
                  id=""
                  name="title"
                  value={title}
                  onChange={(e: any) => setTitle(e.target.value)}
                  className="ml-2 pl-4 py-1 pr-4 text-left border border-slate-300 rounded focus:outline-0   w-full "
                ></input>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mt-8">内容</div>
              <div className="my-1 w-full">
                <textarea
                  rows={2}
                  id=""
                  name="content"
                  value={content}
                  onChange={(e: any) => setContent(e.target.value)}
                  className="text-sm whitespace-normal text-left border border-slate-300 rounded focus:outline-0 pl-4 pt-2 pr-4 pb-24 w-full "
                ></textarea>
              </div>
            </div>
            <div className="flex justify-start mt-8 items-center">
              <input type="checkbox" className="border border-slate-300 mr-3" />
              <p className="text-gray-600">Gistに保存する</p>
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
      <div className="flex justify-end mr-12 mt-56">
        <Quote />
      </div>
    </>
  );
};
