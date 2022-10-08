import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { blogIdArticleEditState } from "../Atom/BlogChoiceAtom";
import { BlogHeader } from "../header/BlogHeader";
import { Header } from "../header/SearchHeader";
import { Sidebar } from "../sidebar/navbar";

const EDIT_ARTICLE = gql`
  mutation EditArticle($input: input!) {
    EditArticle(input: $input) {
      title
      text
    }
  }
`;

export const AdminBlogsIdEditors = () => {
  const articleEditValue = useRecoilValue(blogIdArticleEditState);
  // console.log(articleEditValue);
  // console.log(articleEditValue.title);
  // console.log(articleEditValue.text);
  //console.log(articleEditValue)

  const [title, setTitle] = useState(articleEditValue.title);
  const [text, setText] = useState(articleEditValue.text);

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const [editArticle, { loading, error }] = useMutation(EDIT_ARTICLE);

  const handleSubmit = () => {
    editArticle({
      variables: {
        input: {
          title: title,
          text: text,
        },
      },
    });
  };

  return (
    <>
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
        <div className="flex justify-center mt-5 ml-24">
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
              <div className="text-sm text-gray-500 mt-8">内容</div>
              <div className="my-1 w-full">
                <textarea
                  rows={3}
                  id=""
                  name="content"
                  value={text}
                  onChange={handleTextChange}
                  className="text-sm whitespace-normal text-left border border-slate-300 rounded focus:outline-0 pl-4 pt-2 pr-4 pb-24 w-full "
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center mt-10 items-center">
              <div>
                <div className="flex flex-wrap items-stretch ">
                  <div className="relative flex items-center ">
                    <svg
                      className="h-4 w-4 text-white absolute ml-2.5 "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />{" "}
                      <polyline points="7 10 12 15 17 10" />{" "}
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>

                  <button
                    type="submit"
                    className=" bg-emerald-700 text-white text-sm py-1.5  pr-4 pl-8  font-medium rounded"
                  >
                    保存
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
