import { useMutation, useQuery } from "@apollo/client";
import firebase from "firebase/compat/app";
import React, { useState } from "react";
import { useToast } from "../components/loading/useToast";
import { GET_USER, UPDATE_USER } from "../queries";
import { UpdateUserMutation } from "../types/generated/graphql.tsx/graphql";
import { useLocalStorage } from "./useLocalStorage";

export const useUserForm = () => {
  const { userValue, setUserValue } = useLocalStorage();

  //  ユーザー情報を取得
  const {
    data: userDate,
    loading: userLoading,
    error: userError,
    refetch: userRefetch,
  } = useQuery(GET_USER, { variables: { email: userValue?.email } });

  const [isEdit, setIsEdit] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  //  ユーザー情報を更新
  const [update_users_by_pk, { loading, error }] =
    useMutation<UpdateUserMutation>(UPDATE_USER, {
      onCompleted: () => {
        userRefetch();
        toastSucceeded();
      },
      onError: () => {},
    });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (username !== "" && email !== "") {
      toastLoading();

      try {
        const user = firebase.auth().currentUser;
        if (user) {
          // firebaseのユーザー情報を更新
          await user.updateEmail(email ? email : userDate?.User[0]?.email);
          await user.updateProfile({
            displayName: username ? username : userDate?.User[0]?.name,
          });
          //  DBのユーザー情報を更新
          await update_users_by_pk({
            variables: {
              id: userDate?.User[0]?.id,
              name: username ? username : userDate?.User[0]?.name,
              email: email ? email : userDate?.User[0]?.email,
            },
          });
        }
        //   ローカルストレージのユーザー情報を更新
        setUserValue({
          ...userValue,
          email: email ? email : userDate?.User[0]?.email,
        });
      } catch (err: any) {
        // ここでtrueにして、5秒間trueの場合は、toastFailedを実行する
        setIsEdit(true);
        console.log(err);
      }
    }
  };
  return {
    userValue,
    setUserValue,
    userDate,
    toastFailed,
    handleSubmit,
    isEdit,
    setIsEdit,
    toastLoading,
    setUsername,
    setEmail,
    userLoading,
    email,
    username,
  };
};
