import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DELETE_BLOG_ONE, GET_BLOG_ONE, UPDATE_BLOG_ONE } from "../../queries";
import {
  DeleteBlogOneMutation,
  UpdateBlogOneMutation,
} from "../../types/generated/graphql.tsx/graphql";
import { blogChoiceState } from "../../atom/BlogChoiceAtom";
import BlogDeleteButton from "../ui/deletButton/BlogDeleteButton";
import { BlogHeader } from "../header/BlogHeader";
import { Header } from "../header/SearchHeader";
import { Loading } from "../loading/Loading";
import { useToast } from "../loading/useToast";
import { Sidebar } from "../sidebar/navbar";

// const DELETE_BLOG = gql`
//   mutation DeleteBlog($blog: ID!) {
//     DeleteBlog(blog: $blog) {
//       mockAdminBlogsArticles {
//         blog
//       }
//     }
//   }
// `;

export const AdminBlogsIdConfig = () => {
  const { id: blogId } = useParams();
  const navigate = useNavigate();
  // const blogState = useRecoilValue(blogChoiceState);
  const [title, setTitle] = useState();
  const { data, loading, error } = useQuery(GET_BLOG_ONE, {
    variables: { id: blogId },
  });
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  const [
    update_Blog_by_pk,
    { loading: updateBlogLoading, error: updateBlogError },
  ] = useMutation<UpdateBlogOneMutation>(UPDATE_BLOG_ONE, {
    onCompleted: () => {
      toastSucceeded();
    },
    onError: () => {
      toastFailed();
    },
  });
  const [
    delete_Blog_by_pk,
    { loading: deleteBlogLoading, error: deleteBlogError },
  ] = useMutation<DeleteBlogOneMutation>(DELETE_BLOG_ONE, {
    onCompleted: () => {
      toastSucceeded();
    },
    onError: () => {
      toastFailed();
    },
  });

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  // const [deleteBlog, { loading: deleteLoading, error: deleteError }] =
  //   useMutation(DELETE_BLOG);

  const handleUpdate = async () => {
    toastLoading();

    if (blogId) {
      try {
        await update_Blog_by_pk({
          variables: { id: blogId, title: title ? title : data?.Blog[0].title },
        });
        toastSucceeded();
        //alert("変更が保存されました");
      } catch (err: any) {
        toastFailed();
        //alert(err.message);
      }
    }
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();
    if (blogId) {
      //toastLoading();
      try {
        await delete_Blog_by_pk({ variables: { id: blogId } });
        alert("ブログを削除しました");
        //toastSucceeded();

        window.location.href = `/admin/blogs`;

        // alert("変更が保存されました");
        // navigate(-1);
      } catch (err: any) {
        console.log(err);
        toastFailed();

        //window.location.href = `/admin/blogs`;

        // alert(err.message);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>"エラーが発生しました。"</div>;
  }

  return (
    <>
      {/* <div>AdminBlogsIdConfig</div> */}

      <div>
        <BlogHeader />
      </div>

      <div className="flex justify-start">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="flex justify-center w-4/5 h-full mt-16 mr-48">
          <div className="w-2/5 ">
            <div>
              <div className="mb-2 text-sm text-gray-500">タイトル</div>
              <div className="my-1">
                <input
                  type=""
                  id=""
                  name="title"
                  defaultValue={data?.Blog[0].title}
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full py-1 pl-4 pr-4 ml-2 text-left border rounded border-slate-300 focus:outline-0 "
                ></input>
              </div>
            </div>

            <div className="flex items-center justify-center mt-10 focus:outline-none focus-visible:ring-opacity-75">
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
                    type="button"
                    className=" bg-emerald-700 text-white text-sm py-1.5  pr-4 pl-8  font-medium rounded "
                    onClick={handleUpdate}
                  >
                    保存
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-16 text-sm text-gray-500"></div>
              <div className="w-full my-1">
                <div className="flex items-center justify-center w-full pl-4 pr-6 text-left whitespace-normal border border-red-500 border-dashed rounded-xl focus:outline-0 ">
                  <div className="my-6">
                    <BlogDeleteButton onClick={(e) => handleDelete(e)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
