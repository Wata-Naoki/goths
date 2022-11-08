import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email, password);

    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      navigate("/");
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
              <div className="flex-none order-none h-10 text-3xl not-italic font-medium text-black  w-28 grow-0">
                Goths
              </div>

              <div className="mt-2">アカウント登録</div>
            </div>
          </div>

          {/* <div>
            <div className="text-sm text-gray-500">ユーザー名</div>
            <div className="my-1">
              <input
                type="name"
                id="name"
                name="name"
                className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-80 "
              ></input>
            </div>
          </div> */}
          <form onSubmit={handleSubmit}>
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
                  onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
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
