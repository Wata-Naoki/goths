import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase";

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

          {/* <div>
            <div className="text-sm text-gray-500">ユーザー名</div>
            <div className="my-1">
              <input
                type="name"
                id="name"
                name="name"
                className="text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-80 "
              ></input>
            </div>
          </div> */}
          <form onSubmit={handleSubmit}>
            <div>
              <div className="text-red-500 text-center mt-2 break-all w-80 text-sm">
                {error && error}
              </div>
              <div className="text-sm text-gray-500">メールアドレス</div>
              <div className="my-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
                  className="text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-80 "
                ></input>
              </div>
            </div>

            <div>
              {/* <Link to="/"> */}
              <button
                type="submit"
                className="my-4 bg-emerald-700 text-white text-sm py-2  px-4  font-medium rounded w-80"
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
