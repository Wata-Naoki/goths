import { useMutation } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DELETE_USER_ONE } from "../../queries";
import { DeleteUserOneMutation } from "../../types/generated/graphql.tsx/graphql";
import { Loading } from "../loading/Loading";
import { useToast } from "../loading/useToast";

type Props = {
  //onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  id: string;
  refetch(): Promise<any>;
  dataCount: number | undefined;
};
export const DeleteTableUsers: React.FC<Props> = ({
  id: userId,
  refetch,
  dataCount,
}) => {
  const { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);
  const { toastLoading, toastSucceeded, toastFailed } = useToast();

  const [delete_User_by_pk, { loading: deleteLoading, error: deleteError }] =
    useMutation<DeleteUserOneMutation>(DELETE_USER_ONE, {
      onCompleted: () => {
        toastSucceeded();
        refetch();
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

        // alert("変更が保存されました");
        // navigate(-1);
        // window.location.href = `/admin/blogs/${id}/editors`;
      } catch (err: any) {
        toastFailed();
        //alert(err.message);
      }
    }
  };
  useEffect(() => {
    if (!dataCount) {
      window.location.href = `/authentication`;
    }
  }, [dataCount]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  if (deleteLoading) {
    return <Loading />;
  }
  if (deleteError) {
    return <div>"エラーが発生しました。"</div>;
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-sm font-medium "
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
                    className="text-lg font-medium leading-6 text-gray-900 "
                  >
                    <div className="flex ">
                      <div className="mr-3">
                        <div className="px-2 py-2 bg-red-100 rounded-full">
                          <svg
                            className="w-6 h-6 text-red-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <div>編集者削除</div>

                        <div className="mt-2 text-sm text-gray-500 ">
                          <p>
                            削除された編集者はブログ記事の編集ができなくなります。
                          </p>
                          <p>よろしいですか？</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 mr-4 text-sm font-medium text-black bg-white border rounded-md border-inherit hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border rounded-md border-inherit hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
