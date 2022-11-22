import React from "react";
import { AddButton } from "../AddButton/AddButton";
import { BlogHeader } from "../header/BlogHeader";
import { Sidebar } from "../sidebar/navbar";
import { UserTable1 } from "../UserTable/UserTable";

export const AdminBlogIdArticlesIdEdit = () => {
  return (
    <>
      <div>
        <BlogHeader />
      </div>

      <div className="flex justify-start">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="flex justify-center mt-5 ml-24 h-full w-4/5">
          <div className="w-3/4">
            <div className="flex justify-end mt-10 items-center">
              <div>
                <div className="flex flex-wrap items-stretch ">
                  <div className="relative flex items-center ">
                    <svg
                      className="h-5 w-5 text-white  absolute ml-3 mb-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </div>

                  <button
                    type="button"
                    className=" bg-emerald-700 text-white text-sm py-1  pr-2 pl-8  font-medium rounded"
                  >
                    <AddButton />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="my-1 mt-10">
                <div>
                  <UserTable1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
