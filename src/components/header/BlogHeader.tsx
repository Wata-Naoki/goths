import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Manage } from "../../pages/Articles/blogArticle";
import { blogIdState } from "../Atom/BlogChoiceAtom";
import { ModalBlogHeader } from "./ModalBlogHeader";
import UserIcon from "./UserIcon";

export const BlogHeader = ({ blogTitle }: any) => {
  const blogIdStateValue = useRecoilValue(blogIdState);
  // console.log(blogIdStateValue)
  console.log(blogTitle);
  return (
    <>
      <div className="flex justify-between my-2 mx-5">
        <div>
          {/* 1 */}
          <Link to="/admin/blogs">
            <div className="text-black w-28 h-10 text-3xl  font-medium not-italic flex-none order-none grow-0">
              Goths
            </div>
          </Link>
        </div>
        {/* 1 */}

        <div>
          {/* 2 */}

          <div>
            <ModalBlogHeader blogTitle={blogTitle} />
          </div>
        </div>
        {/* 2 */}

        <div>
          {/* 3 */}

          <div className="flex justify-between items-center">
            <div className=" text-gray-500 mr-4">
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
        {/* 3 */}
      </div>
    </>
  );
};
