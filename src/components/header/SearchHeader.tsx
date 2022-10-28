import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import App from "../../App";
import { Manage } from "../../pages/Articles/blogArticle";

/* import { Manage } from "../../pages/Articles/blogArticle";
 */
import { ResultSearch } from "../6.search/ResultSearch";
import Searches from "../6.search/serches";
import { blogIdState } from "../Atom/BlogChoiceAtom";
import UserIcon from "./UserIcon";

export const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  // console.log(`text:${text}`);
  const blogIdStateValue = useRecoilValue(blogIdState);
  // console.log(blogIdStateValue)

  return (
    <>
      <div className="flex justify-between my-6 mx-3">
        <div>
          <Link to={"/admin/blogs"}>
            <div className="text-black w-28 h-10 text-3xl  font-medium not-italic flex-none order-none grow-0">
              Goths
            </div>
          </Link>
        </div>

        <div>
          <div className="flex w-40 flex-wrap items-stretch mb-2">
            <div className="relative flex items-center">
              <svg
                className="h-4 w-4 text-gray-500 absolute ml-2 mt-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() => {
                  if (text) {
                    navigate(`/search/${text}`);
                  }
                }}
              >
                {" "}
                <circle cx="11" cy="11" r="8" />{" "}
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <input
              value={text}
              onChange={({ target: { value } }) => {
                setText(value);
              }}
              type="text"
              placeholder="検索ワードを入力"
              className="px-1 py-1  text-slate-600 bg-white text-sm rounded border border-slate-300 shadow-sm outline-none pl-7 pr-4"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="mr-3 text-gray-500">
              <Link to="/favorites">お気に入り</Link>
            </div>

            <div className="mr-3">
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
