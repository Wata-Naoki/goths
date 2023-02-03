import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebaseConfig";
import { useLocalStorage } from "./useLocalStorage";

export const useAuthenticate = () => {
  const [error, setError] = useState("");
  const { userValue, setUserValue } = useLocalStorage();
  const navigate = useNavigate();
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

  const handleLogin = async () => {
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
      setError("ログインに失敗しました。");
    }
  };
  return { error, handleSubmit, handleLogin };
};
