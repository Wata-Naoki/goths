import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const DeleteButton: React.FC<Props> = ({ onClick }) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        className="flex items-center justify-center py-2 pr-4 bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus-visible:ring-opacity-75"
        onClick={openModal}
      >
        <div className="flex items-center ">
          <svg
            className="w-5 h-5 ml-2 text-white "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
        <div className="ml-1 text-sm font-medium text-white ">削除</div>
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
                    className="text-lg font-medium leading-6 text-gray-900"
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
                        <div>記事削除</div>

                        <div className="mt-2 text-sm text-gray-500">
                          <p>記事を削除すると復元できません。</p>
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
                        onClick={(e) => {
                          closeModal();
                          if (onClick) {
                            onClick(e);
                          }
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

export default DeleteButton;
