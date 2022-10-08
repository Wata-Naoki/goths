import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <div className="flex justify-center text-center mb-4">
            <div>
              <div className=" text-black w-28 h-10 text-3xl  font-medium not-italic flex-none order-none grow-0">
                Goths
              </div>

              <div className="mt-2">アカウント登録</div>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-500">ユーザー名</div>
            <div className="my-1">
              <input
                type="name"
                id="name"
                name="name"
                className="text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-80 "
              ></input>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-500">メールアドレス</div>
            <div className="my-1">
              <input
                type="email"
                id="email"
                name="email"
                className="text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-80 "
              ></input>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-500 mt-4">パスワード</div>
            <div className="my-1">
              <input
                type="password"
                id="password"
                name="password"
                className="text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-80 "
              ></input>
            </div>
          </div>

          <div>
            <Link to="/">
              <button
                type="button"
                className="my-4 bg-emerald-700 text-white text-sm py-2  px-4  font-medium rounded w-80"
              >
                登録
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
