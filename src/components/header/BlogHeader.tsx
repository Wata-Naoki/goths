import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Manage } from "../../pages/articles/blogArticle";
import { blogIdState } from "../../atom/BlogChoiceAtom";
import { ModalBlogHeader } from "./ModalBlogHeader";
import { useModalState } from "./useModalState";
import UserIcon from "./UserIcon";

export const BlogHeader = ({ blogTitle }: any) => {
  const blogIdStateValue = useRecoilValue(blogIdState);
  // console.log(blogIdStateValue)
  console.log(blogTitle);

  const { isOpen, setIsOpen, closeModal, openModal } = useModalState();
  return (
    <>
      <div className="flex justify-between w-screen px-3 my-4 ">
        <div>
          {/* 1 */}
          <Link to="/admin/blogs">
            <div className="flex-none order-none h-10 text-3xl not-italic font-medium text-black w-28 grow-0">
              Goths
            </div>
          </Link>
        </div>
        {/* 1 */}

        <div>
          {/* 2 */}

          <div className="flex justify-center w-11/12 ">
            <ModalBlogHeader
              blogTitle={blogTitle}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              closeModal={closeModal}
              openModal={openModal}
            />
          </div>
        </div>
        {/* 2 */}

        <div>
          {/* 3 */}

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
        {/* 3 */}
      </div>
    </>
  );
};
