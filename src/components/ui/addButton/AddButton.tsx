import { gql, useMutation, useQuery } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../../AuthContext";
import { auth } from "../../../firebaseConfig";
import { CREATE_USER_ONE, GET_ALL_USERS } from "../../../queries";
import { useToast } from "../../loading/useToast";

// const USER_ADD = gql`
//   mutation UserAdd($input: input!) {
//     UserAdd(input: $input) {
//       email
//     }
//   }
// `;
type UserState = { name: string; email: string; password: string };

export const AddButton = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [currentUser, setCurrentUser] = useState<string>("");
  const [userState, setUserState] = useState<UserState>({
    name: "",
    email: "",
    password: "",
  });
  //TODO: 全ユーザーを取得。その中に同じメールアドレスがあるかどうかを確認する。あるなら、更新。ないなら、新規作成。更新のmutationの作成をする。
  const { error: userError, data: userData } = useQuery(GET_ALL_USERS);

  const [insert_User_one, { loading, error }] = useMutation(CREATE_USER_ONE, {
    onCompleted: () => {
      toastSucceeded();
    },
    onError: () => {
      toastFailed();
    },
  });
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  const handleSubmit = async () => {
    setCurrentUser(user);
    toastLoading();
    if (id && userState.name && userState.email && userState.password) {
      try {
        await insert_User_one({
          variables: {
            blog_id: id,
            name: userState.name,
            email: userState.email,
          },
        });
        await auth.createUserWithEmailAndPassword(
          userState.email,
          userState.password
        );
        toastSucceeded();
        //alert("変更が保存されました");
      } catch (err: any) {
        toastSucceeded();
        //alert(err.message);
      }
    }
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="flex flex-wrap items-stretch px-1 py-1 rounded cursor-pointer bg-emerald-700"
        onClick={openModal}
      >
        <div className="z-10 flex items-center ">
          <svg
            className="h-5 w-5  text-white   ml-3 mb-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </div>

        <button
          type="button"
          className="z-0 py-1 pl-2 pr-2 text-sm font-medium text-white "
        >
          追加
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <form
                      onSubmit={async (e) => {
                        closeModal();
                        e.preventDefault();
                        await handleSubmit();
                        window.location.href = `/admin/blogs/${id}/editors`;
                      }}
                    >
                      <div className="flex justify-center text-center">
                        <div>
                          <div className="">編集者追加</div>

                          <div className="px-10 mt-4 text-sm text-gray-500">
                            <p>名前を入力してください。</p>
                            <input
                              value={userState.name}
                              defaultValue={""}
                              type="name"
                              onChange={(e: any) =>
                                setUserState({
                                  ...userState,
                                  name: e.target.value,
                                })
                              }
                              id="name"
                              required
                              name="name"
                              className="py-1 pl-1 mb-4 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                            />
                            <p>Eメールアドレスを入力してください。</p>
                            <input
                              value={userState.email}
                              defaultValue={""}
                              type="email"
                              onChange={(e: any) =>
                                setUserState({
                                  ...userState,
                                  email: e.target.value,
                                })
                              }
                              id="email"
                              required
                              name="email"
                              className="py-1 pl-1 my-2 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                            />
                            <p>パスワードを入力してください。</p>
                            <input
                              value={userState.password}
                              defaultValue={""}
                              type="password"
                              onChange={(e: any) =>
                                setUserState({
                                  ...userState,
                                  password: e.target.value,
                                })
                              }
                              id="password"
                              required
                              name="password"
                              className="py-1 pl-1 my-2 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between w-full mt-2">
                        <button
                          type="button"
                          className="inline-flex justify-center w-1/2 px-4 py-2 mr-4 text-sm font-medium text-black bg-white border rounded-md border-inherit hover:bg-gray-50 focus:outline-none "
                          onClick={closeModal}
                        >
                          Cancel
                        </button>

                        <div className="relative flex items-center "></div>
                        <button
                          type="submit"
                          className="inline-flex justify-center w-1/2 py-2 pl-3 text-sm font-medium text-white bg-green-700 border rounded-md border-inherit hover:bg-green-600 focus:outline-none "
                        >
                          追加
                        </button>
                      </div>
                    </form>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
