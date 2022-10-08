import { gql, useMutation, useQuery } from "@apollo/client";
import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { Header } from "../header/SearchHeader";

const MYAPAGE_QUERY = gql`
  query articleFavoritesCount {
    articleFavoritesCount {
      mockArticleStats {
        numberOfArticles
      }
    }
  }
`;

const Mypage = () => {
  const { loading, error, data } = useQuery(MYAPAGE_QUERY);
  // console.log(data);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="text-center my-10">記事作成履歴</div>

      <div className="flex justify-center">
        <div className="flex flex-col w-3/5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y ">
                  <tbody className="bg-white divide-y divide-gray-00 ">
                    <th className="py-2 text-gray-400 bg-gray-100">1月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">2月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">3月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">4月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">5月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">6月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">7月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">8月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">9月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">10月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">11月</th>
                    <th className="py-2 text-gray-400 bg-gray-100">12月</th>

                    <tr>
                      {data?.articleFavoritesCount.data[0].numberOfArticles.map(
                        (x: any) => (
                          <td className="px-6 py-4  ">
                            <div key={x.id} className="flex justify-center">
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

      <div className="text-center text-2xl mt-24 mb-10">ユーザー設定</div>

      <div className="">
        <UserForm />
      </div>
    </>
  );
};

export default Mypage;

const USER_SETTING = gql`
  mutation UserSetting($input: input!) {
    UserSetting(input: $input) {
      username
      email
      gitToken
    }
  }
`;

export const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gitToken, setGitToken] = useState("");

  const [userSetting, { loading, error }] = useMutation(USER_SETTING);

  const handleSubmit = () => {
    const result = userSetting({
      variables: {
        input: {
          username: username,
          email: email,
          gitToken: gitToken,
        },
      },
    });

    // console.log(result);

    userSetting({
      variables: {
        input: {
          username: username,
          email: email,
          gitToken: gitToken,
        },
      },
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex flex-col items-center "
          >
            <div className="mb-5">
              <p className="mb-2 text-gray-500">ユーザー名</p>
              <input
                value={username}
                onChange={(e: any) => setUsername(e.target.value)}
                className="text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-96 "
              />
            </div>

            <div className="mb-5">
              <p className="mb-2 text-gray-500">メールアドレス</p>
              <input
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                className=" text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-96 "
              />
            </div>

            <div className="mb-5">
              <p className="mb-2 text-gray-500">GitHub Token</p>
              <input
                value={gitToken}
                onChange={(e: any) => setGitToken(e.target.value)}
                className="text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-96 "
              />
            </div>

            <div className="flex flex-wrap items-stretch ">
              <div className="relative flex items-center ">
                <svg
                  className="h-4 w-4 text-white absolute ml-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>

              <button
                type="submit"
                className=" bg-emerald-700 text-white text-sm py-1.5  px-4 pl-6  font-medium rounded"
              >
                保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
