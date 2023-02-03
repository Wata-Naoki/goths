import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { CREATE_ADMIN_USER_ONE } from "../queries";
import { useLocalStorage } from "./useLocalStorage";

export const useRegister = () => {
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
        case "auth/invalid-email":
          setError("正しいメールアドレスの形式で入力してください。");
          break;
        case "auth/email-already-in-use":
          setError("既に登録済みのメールアドレスです。");
          break;
        case "auth/weak-password":
          setError("パスワードは6文字以上で入力してください。");
          break;
        default:
          setError("既に登録済みのメールアドレスです。");
          break;
      }
    }
  };
  return { error, handleSubmit, adminError, adminLoading };
};
