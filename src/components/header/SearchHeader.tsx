import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ResultSearch } from "../search/ResultSearch";
import Searches from "../search/serches";
import { Loading } from "../loading/Loading";
import { UserIcon } from "./UserIcon";

export const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between mx-3 my-6">
        <div>
          <Link to={"/"}>
            <div className="flex-none order-none h-10 text-3xl not-italic font-medium text-black w-28 grow-0">
              Goths
            </div>
          </Link>
        </div>

        <div>
          <div className="flex flex-wrap items-stretch w-40 mb-2 ml-16">
            <div className="relative flex items-center">
              <svg
                className="absolute w-4 h-4 ml-2 text-gray-500 mt-7 hover:cursor-pointer "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => {
                  if (text) {
                    navigate(`/search/${text}`);
                  }
                }}
              >
                <circle cx="11" cy="11" r="8" />
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
              className="px-1 py-1 pr-4 text-sm bg-white border rounded shadow-sm outline-none text-slate-600 border-slate-300 pl-7"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="mr-3 text-gray-500">
              <Link to="/favorites">お気に入り</Link>
            </div>

            <div className="mr-3">
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
        {/* 3 */}
      </div>
    </>
  );
};
