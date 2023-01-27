import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
import { auth, provider } from "../../firebaseConfig";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Authentication = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { userValue, setUserValue } = useLocalStorage();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      const result = await auth.signInWithEmailAndPassword(
        email.value,
        password.value
      );
      const currentUser = result.user;
      if (currentUser?.email) {
        setUserValue({ email: currentUser?.email });
        navigate("/");
        window.location.href = `/`;
      }
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("正しいメールアドレスの形式で入力してください。");
          break;
        case "auth/user-not-found":
          setError("ユーザーが見つかりません。");
          break;
        case "auth/wrong-password":
          setError("パスワードが間違っています。");
          break;
        default:
          setError("メールアドレスかパスワードに誤りがあります。");
          break;
      }
    }
  };

  const handleLogin = async (event: any) => {
    try {
      // await auth.signInWithPopup(provider)
      const result = await auth.signInWithPopup(provider);
      const currentUser = result.user;

      if (currentUser?.email) {
        setUserValue({ email: currentUser?.email });
        navigate("/");
        window.location.href = `/`;
      }
    } catch (error: any) {
      console.log(error);
      setError("ログインに失敗しました。");
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

              <div className="mt-2"> ログイン</div>
            </div>
          </div>

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
              {/* <Link to="/login"> */}
              <button
                type="submit"
                className="px-4 py-2 my-4 text-sm font-medium text-white rounded bg-emerald-700 w-80"
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
              className="px-4 py-2 my-4 text-sm font-medium text-white bg-green-800 rounded w-80"
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
