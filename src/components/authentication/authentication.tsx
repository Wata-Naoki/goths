import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
import auth, { provider } from "../../firebase";

export const Authentication = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    console.log(email, password);
    try {
      await auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          navigate("/");
        });
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("正しいメールアドレスの形式で入力してください。");
          break;
        case "auth/user-not-found":
          setError("メールアドレスかパスワードに誤りがあります。");
          break;
        case "auth/wrong-password":
          setError("メールアドレスかパスワードに誤りがあります。");
          break;
        default:
          setError("メールアドレスかパスワードに誤りがあります。");
          break;
      }
    }
  };

  const handleLogin = async (event: any) => {
    try {
      await auth.signInWithPopup(provider);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setError(error.message);
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

              <div className="mt-2"> ログイン</div>
            </div>
          </div>

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
              {/* <Link to="/login"> */}
              <button
                type="submit"
                className="my-4 bg-emerald-700 text-white text-sm py-2  px-4  font-medium rounded w-80"
              >
                ログイン
              </button>
              {/* </Link> */}
            </div>
          </form>
          <div>
            <button
              onClick={handleLogin}
              type="submit"
              className="my-4 bg-green-800 text-white text-sm py-2  px-4  font-medium rounded w-80"
            >
              Googleログイン
            </button>
          </div>

          <div>
            ユーザ登録は
            <Link to={"/register"} className="text-blue-900 underline">
              こちら
            </Link>
            から
          </div>
        </div>
      </div>
    </>
  );
};
