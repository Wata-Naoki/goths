import { gql, useMutation, useQuery } from "@apollo/client";
import { type } from "@testing-library/user-event/dist/type";
import React, { FormEvent, useEffect, useState } from "react";
import { GET_USER, UPDATE_USER } from "../../queries";
import { UpdateUserMutation } from "../../types/generated/graphql.tsx/graphql";
import { Header } from "../../components/header/SearchHeader";
import { Loading } from "../../components/loading/Loading";
import { useAuthContext } from "../../AuthContext";
import { useToast } from "../../components/loading/useToast";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

export const UserForm = () => {
  const { userValue, setUserValue } = useLocalStorage();

  const {
    data: userDate,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, { variables: { email: userValue?.email } });

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [gitToken, setGitToken] = useState("");
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  // const [userSetting, { loading, error }] = useMutation(USER_SETTING);
  const [update_users_by_pk, { loading, error }] =
    useMutation<UpdateUserMutation>(UPDATE_USER, {
      onCompleted: () => {
        toastSucceeded();
      },
      onError: () => {
        toastFailed();
      },
    });

  /* useEffect(() => {
     setUsername(userDate?.User[0].name)
  },[username, email])
 */

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (username !== "" && email !== "") {
      toastLoading();
      try {
        await update_users_by_pk({
          variables: {
            id: userDate?.User[0]?.id,
            name: username ? username : userDate?.User[0]?.name,
            email: email ? email : userDate?.User[0]?.email,
          },
        });
        // TODO: ユーザー名とメールアドレスを変更するロジックを書く
        // const user = firebase.auth().currentUser;
        // if (user) {
        //   await user
        //     .updateProfile({
        //       displayName: username ? username : userDate?.User[0]?.name,
        //       email: email ? email : userDate?.User[0]?.email,
        //     })
        //     .catch((error) => {
        //       // An error occurred
        //       // ...
        //     });
        // }
        // await userValue?.updateProfile({
        //   displayName: username ? username : userDate?.User[0]?.name,
        //   email: email ? email : userDate?.User[0]?.email,
        // });
        toastSucceeded();
        // alert("変更が保存されました");
      } catch (err: any) {
        toastFailed();
        // alert(err.message);
      }
    }
  };

  if (userLoading) {
    return <Loading />;
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
                value={username ? username : userDate?.User[0].name}
                onChange={(e: any) => setUsername(e.target.value)}
                className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-96 "
              />
            </div>

            <div className="my-6">
              <p className="mb-2 text-gray-500">メールアドレス</p>
              <input
                defaultValue={userDate?.User[0]?.email}
                value={email ? email : userDate?.User[0]?.email}
                onChange={(e: any) => setEmail(e.target.value)}
                className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-96"
              />
            </div>

            {/* <div className="mb-5">
              <p className="mb-2 text-gray-500">GitHub Token</p>
              <input
                value={gitToken}
                onChange={(e: any) => setGitToken(e.target.value)}
                className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-96 "
              />
            </div> */}

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
