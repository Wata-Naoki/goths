import { useMutation } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import { DELETE_USER_ONE } from "../../queries/queries";
import { DeleteUserOneMutation } from "../../types/generated/graphql.tsx/graphql";
import { Loading } from "../Loading/Loading";
import { useToast } from "../Loading/useToast";

type Props = {
  //onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  id: string;
};
const DeleteTableUsers: React.FC<Props> = ({ id: userId }) => {
  const { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  const [delete_User_by_pk, { loading: deleteLoading, error: deleteError }] =
    useMutation<DeleteUserOneMutation>(DELETE_USER_ONE, {
      onCompleted: () => {
        toastSucceeded();
      },
      onError: () => {
        toastFailed();
      },
    });
  const handleDelete = async () => {
    toastLoading();
    if (userId) {
      try {
        await delete_User_by_pk({ variables: { id: userId } });
        toastSucceeded();
        // alert("変更が保存されました");
        // navigate(-1);
        window.location.href = `/admin/blogs/${id}/editors`;
      } catch (err: any) {
        toastFailed();
        //alert(err.message);
      }
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /* if (deleteLoading) {
    return <Loading />;
  } */
  if (deleteError) {
    return <div>"エラーが発生しました。"</div>;
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="  text-sm font-medium   "
      >
        削除
      </button>

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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex  ">
                      <div className="mr-3">
                        <div className="bg-red-100 px-2  py-2  rounded-full">
                          <svg
                            className="h-6 w-6 text-red-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            {" "}
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />{" "}
                            <line x1="12" y1="9" x2="12" y2="13" />{" "}
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <div>編集者削除</div>

                        <div className="mt-2 text-sm text-gray-500  ">
                          <p>
                            削除された編集者はブログ記事の編集ができなくなります。
                          </p>
                          <p>よろしいですか？</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        className="mr-4 inline-flex justify-center rounded-md border border-inherit bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-inherit bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                        onClick={async () => {
                          closeModal();
                          await handleDelete();
                        }}
                      >
                        削除
                      </button>
                    </div>
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
export default DeleteTableUsers;
