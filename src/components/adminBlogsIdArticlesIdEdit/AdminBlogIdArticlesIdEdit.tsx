import React from "react";
import { AddButton } from "../ui/addButton/AddButton";
import { BlogHeader } from "../header/BlogHeader";
import { Sidebar } from "../sidebar/navbar";
import { UserTable } from "../userTable/UserTable";

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
        <div className="flex justify-center w-5/6 h-full pr-20 mt-5 ">
          <div className="w-3/4">
            <div className="flex items-center justify-end mt-10">
              <div>
                <AddButton />
              </div>
            </div>

            <div>
              <div className="my-1 mt-10">
                <div>
                  <UserTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
