import { gql, useMutation, useQuery } from "@apollo/client";
import { type } from "@testing-library/user-event/dist/type";
import React, { FormEvent, useEffect, useState } from "react";
import { GET_USER, UPDATE_USER } from "../../queries";
import { UpdateUserMutation } from "../../types/generated/graphql.tsx/graphql";
import { Header } from "../../components/header/SearchHeader";
import { Loading } from "../../components/loading/Loading";
import { useAuthContext } from "../../AuthContext";
import { useToast } from "../../components/loading/useToast";

const Mypage = () => {
  const month = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="my-10 text-center">記事作成履歴</div>

      <div className="flex justify-center">
        <div className="flex flex-col w-3/5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y ">
                  <tbody className="font-normal bg-white divide-y divide-gray-00">
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      1月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      2月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      3月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      4月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      5月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      6月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      7月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      8月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      9月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      10月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      11月
                    </th>
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      12月
                    </th>

                    <tr>
                      {[0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1].map(
                        (x: any, index) => (
                          <td className="px-6 py-4 ">
                            <div key={index} className="flex justify-center">
                              <h2>{x}</h2>
                            </div>
                          </td>
                        )
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-10 text-2xl text-center">ユーザー設定</div>

      <div className="">
        <UserForm />
      </div>
    </>
  );
};

export default Mypage;

// const USER_SETTING = gql`
//   mutation UserSetting($input: input!) {
//     UserSetting(input: $input) {
//       username
//       email
//       gitToken
//     }
//   }
// `;

export const UserForm = () => {
  const { user } = useAuthContext();

  const {
    data: userDate,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER, { variables: { email: user?.email } });

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [gitToken, setGitToken] = useState("");
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  // const [userSetting, { loading, error }] = useMutation(USER_SETTING);
  const [updata_users_by_pk, { loading, error }] =
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
        await updata_users_by_pk({
          variables: {
            id: userDate?.User[0]?.id,
            name: username ? username : userDate?.User[0]?.name,
            email: email ? email : userDate?.User[0]?.email,
          },
        });
        await user?.updateProfile({
          displayName: username ? username : userDate?.User[0]?.name,
          email: email ? email : userDate?.User[0]?.email,
        });
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
