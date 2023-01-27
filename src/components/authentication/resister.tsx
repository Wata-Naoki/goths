import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CREATE_ADMIN_USER_ONE } from "../../queries";

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const { userValue, setUserValue } = useLocalStorage();

  const [execute, { error: adminError, loading: adminLoading }] = useMutation(
    CREATE_ADMIN_USER_ONE,
    {
      onCompleted: () => {
        alert("ユーザー登録が完了しました。");
      },
      onError: () => {
        alert("ユーザー登録に失敗しました。");
      },
    }
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;

    try {
      const result = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      await result.user?.updateProfile({
        displayName: name.value,
      });
      await execute({
        variables: {
          name: name.value,
          email: email.value,
        },
      });
      setUserValue({
        name: name.value,
        email: email.value,
      });

      navigate("/");
      window.location.href = "/";
    } catch (error: any) {
      switch (error.code) {
        default:
          setError("既に登録済みのメールアドレスです。");
          break;
      }
    }
  };

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
              {/* <Link to="/"> */}
              <button
                type="submit"
                className="px-4 py-2 my-4 text-sm font-medium text-white rounded bg-emerald-700 w-80"
              >
                登録
              </button>
              {/* </Link> */}
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
