import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
import { SectionLoading } from "../loading/SectionLoading";

export const Register = () => {
  const { error, handleSubmit, adminLoading, adminError } = useRegister();
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div>
          <div className="flex justify-center mb-4 text-center">
            <div>
              <div className="flex-none order-none h-10 text-3xl not-italic font-medium text-black w-28 grow-0">
                Goths
              </div>

              <div className="mt-2">アカウント登録</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <div className="text-sm text-gray-500">ユーザー名</div>
              <div className="my-1">
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                />
              </div>
            </div>
            <div>
              <div className="mt-2 text-sm text-center text-red-500 break-all w-80">
                {error && error}
              </div>
              <div className="text-sm text-gray-500">メールアドレス</div>
              <div className="my-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                ></input>
              </div>
            </div>

            <div>
              <div className="mt-4 text-sm text-gray-500">パスワード</div>
              <div className="my-1">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="px-4 py-2 my-4 text-sm font-medium text-white rounded outline-none bg-emerald-700 w-80 hover:bg-emerald-800 focus: focus:ring-2 focus:ring-emerald-800 focus:ring-opacity-50"
              >
                {adminLoading ? (
                  <SectionLoading variant="secondary" />
                ) : (
                  <span>登録</span>
                )}
              </button>
            </div>
          </form>
          <div>
            ログインは
            <Link to={"/authentication"} className="text-blue-900 underline">
              こちら
            </Link>
            から
          </div>
        </div>
      </div>
    </>
  );
};
