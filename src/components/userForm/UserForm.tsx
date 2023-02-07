import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SectionLoading } from "../loading/SectionLoading";
import { useUserForm } from "../../hooks/useUserForm";

export const UserForm = () => {
  const navigate = useNavigate();

  const {
    userValue,
    userDate,
    toastFailed,
    toastLoading,
    handleSubmit,
    isEdit,
    setIsEdit,
    setUsername,
    setEmail,
    email,
    username,
    userLoading,
  } = useUserForm();

  // 5秒間経ってもLoadingが終わらなかったらエラーを表示する
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isEdit) {
        toastFailed();
        setIsEdit(false);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [toastLoading]);

  if (userLoading) {
    return <SectionLoading />;
  }

  // userValueかuserDateがない場合はログインページにリダイレクトする
  if (!userValue || !userDate) {
    navigate("/authentication");
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/5">
          <form onSubmit={handleSubmit} className="flex flex-col items-center ">
            <div className="mb-5">
              <p className="mb-2 text-gray-500">ユーザー名</p>
              <input
                defaultValue={userDate?.User[0]?.name}
                value={username}
                onChange={(e: any) => setUsername(e.target.value)}
                className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-96 "
              />
            </div>

            <div className="my-6">
              <p className="mb-2 text-gray-500">
                メールアドレス
                {userValue.googleLogin && (
                  <span className="text-gray-400 ">
                    （Googleログインのため変更不可）
                  </span>
                )}
              </p>
              <input
                defaultValue={userDate?.User[0]?.email}
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-96 disabled:opacity-50"
                disabled={userValue.googleLogin ? true : false}
              />
            </div>

            <button
              className="flex items-center justify-center px-3 my-12 rounded bg-emerald-700"
              type="submit"
            >
              <div className="flex items-center ">
                <svg
                  className="h-4 w-4 text-white  ml-1.5"
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

              <div className=" text-white text-sm py-1.5 ml-1  pr-1.5  font-medium ">
                保存
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
