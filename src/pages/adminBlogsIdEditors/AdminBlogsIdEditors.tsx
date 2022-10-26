import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { GET_ARTICLE, UPDATE_ARTICLE } from "../../queries/queries";
import {
  GetArticleQuery,
  UpdateArticleMutation,
} from "../../types/generated/graphql.tsx/graphql";
import { blogIdArticleEditState } from "../../components/Atom/BlogChoiceAtom";
import { BlogHeader } from "../../components/header/BlogHeader";
import { Header } from "../../components/header/SearchHeader";
import { Loading } from "../../components/Loading/Loading";
import { Sidebar } from "../../components/sidebar/navbar";

export const AdminBlogsIdEditors = () => {
  const articleEditValue = useRecoilValue(blogIdArticleEditState);

  const { id: blogId, articleId } = useParams();

  const {
    data,
    loading: articleLoading,
    error: articleError,
  } = useQuery<GetArticleQuery>(GET_ARTICLE, {
    variables: { id: articleId },
  });
  //console.log(data);

  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [allText, setAllText] = useState();

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleAllTextChange = (e: any) => {
    setAllText(e.target.value);
  };

  // const [editArticle, { loading, error }] = useMutation(EDIT_ARTICLE);
  const [update_Article_by_pk, { loading, error }] =
    useMutation<UpdateArticleMutation>(UPDATE_ARTICLE);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (articleId) {
      try {
        await update_Article_by_pk({
          variables: {
            id: articleId,
            title: title,
            text: text,
            all_text: allText,
          },
        });
        alert("変更が保存されました");
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  if (articleLoading) {
    return <Loading />;
  }

  return (
    <>
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
                      defaultValue={data?.Article[0].title}
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
                      defaultValue={data?.Article[0].text}
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
                      defaultValue={
                        data?.Article[0].all_text
                          ? data?.Article[0].all_text
                          : undefined
                      }
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
        </div>
      </div>
    </>
  );
};
