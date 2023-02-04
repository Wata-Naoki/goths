import React from "react";
import { Link } from "react-router-dom";
import { ModalBlogHeader } from "./ModalBlogHeader";
import { UserIcon } from "./UserIcon";

export const BlogHeader = ({ blogTitle }: any) => {
  return (
    <>
      <div className="flex justify-between w-screen px-3 my-4 ">
        <div>
          <Link to="/">
            <span className="flex-none order-none h-10 text-3xl not-italic font-medium text-black w-28 grow-0">
              Goths
            </span>
          </Link>
        </div>

        <div>
          <div className="flex justify-center w-11/12 ">
            <ModalBlogHeader />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <div className="mr-4 text-gray-500 ">
              <Link to="/favorites">お気に入り</Link>
            </div>

            <div className="mr-4">
              <Link to={`/admin/blogs`}>
                <div className="flex flex-wrap items-stretch ">
                  <div className="relative flex items-center ">
                    <svg
                      className="h-4 w-4 text-white absolute ml-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      />
                    </svg>
                  </div>

                  <button
                    type="submit"
                    className="bg-emerald-700 text-white text-sm py-1.5  px-4 pl-6  font-medium rounded"
                  >
                    管理画面
                  </button>
                </div>
              </Link>
            </div>

            <div>
              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
