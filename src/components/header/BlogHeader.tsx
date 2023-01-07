import React from "react";
import { Link } from "react-router-dom";
import { Manage } from "../../pages/articles/blogArticle";
import { ModalBlogHeader } from "./ModalBlogHeader";
import { useModalState } from "./useModalState";
import UserIcon from "./UserIcon";

export const BlogHeader = ({ blogTitle }: any) => {
  return (
    <>
      <div className="flex justify-between w-screen px-3 my-4 ">
        <div>
          <Link to="/admin/blogs">
            <div className="flex-none order-none h-10 text-3xl not-italic font-medium text-black w-28 grow-0">
              Goths
            </div>
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
                <Manage />
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
