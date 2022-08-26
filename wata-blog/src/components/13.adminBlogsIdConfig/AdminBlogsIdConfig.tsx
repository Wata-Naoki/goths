import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { blogChoiceState } from "../Atom/BlogChoiceAtom";
import BlogDeleteButton from "../deletButton/BlogDeleteButton";
import { BlogHeader } from "../header/BlogHeader";
import { Header } from "../header/SearchHeader";
import { Sidebar } from "../sidebar/navbar";


const DELETE_BLOG = gql`
  mutation DeleteBlog($blog: ID!) {
    DeleteBlog(blog: $blog) {
      mockAdminBlogsArticles {
        blog
      }
    }
  }
`;


export const AdminBlogsIdConfig = () => {

  const blogState = useRecoilValue(blogChoiceState);
  const [title, setTitle] = useState(blogState)
  const handleTitleChange = (e:any) => {
    setTitle(e.target.value)
  }

  //改善の余地あり
  const { id: blogId } = useParams();
  const navigate = useNavigate();


  const [deleteBlog, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_BLOG);
  
  return (
    <>
      {/* <div>AdminBlogsIdConfig</div> */}
      <div>
        <BlogHeader />
      </div>
      <div>
        <Sidebar />
      </div>
      <div className="flex justify-center mt-5 ml-24 h-full">
        <div className="w-2/5 ">
          <div>
            <div className="text-sm text-gray-500 mb-2">タイトル</div>
            <div className="my-1">
              <input
                type=""
                id=""
                name="title"
                value={title}
                onChange={handleTitleChange}
                className="ml-2 pl-4 py-1 pr-4 text-left border border-slate-300 rounded focus:outline-0   w-full "
              ></input>
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
                  type="button"
                  className=" bg-emerald-700 text-white text-sm py-1.5  pr-4 pl-8  font-medium rounded"
                >
                  保存
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-500 mt-8">危険領域</div>
            <div className="my-1 w-full">
              <div className="flex justify-center items-center whitespace-normal text-left border border-dashed border-red-500 rounded-xl focus:outline-0 pl-4  pr-6  w-full ">
                <div className="my-6">
                  <BlogDeleteButton 
                  onClick={() => {
                      deleteBlog({
                        variables: {
                          blog: blogId,
                        },
                      });
                      navigate(`/admin/blogs/${blogId}`);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
