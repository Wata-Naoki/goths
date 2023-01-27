import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
export const Quote = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const [posts, setPosts] = useState<any>({});
  const [error, setError] = useState<string>("");

  useEffect(() => {
    isOpen ||
      fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((error) => setError(error.message));
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-wrap items-stretch ">
        <div className="relative flex items-center">
          <button
            className="px-2 py-2 bg-green-700 rounded-full"
            onClick={() => {
              openModal();
            }}
          >
            <svg
              className="w-6 h-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" />
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
              <line x1="9.7" y1="17" x2="14.3" y2="17" />
            </svg>
          </button>
        </div>
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
                    <div className="flex justify-center text-center">
                      <div>
                        <div className="">Quote</div>

                        <div className="px-10 mt-4 text-sm text-gray-500">
                          {error && "Error"}
                          {!posts ? (
                            "loading"
                          ) : (
                            <>
                              <p className="my-2">{posts.content}</p>
                              <p className="my-2">{posts.author}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between w-full mt-2">
                      <button
                        type="button"
                        className="inline-flex justify-center w-1/2 px-4 py-2 mr-4 text-sm font-medium text-black bg-white border rounded-md border-inherit hover:bg-gray-50 focus:outline-none "
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <CopyToClipboard
                        text={`${posts.content}\n${posts.author}`}
                      >
                        <div
                          className="flex items-center w-1/2 bg-green-700 border rounded-md cursor-pointer hover:bg-green-600 border-inherit focus:outline-none"
                          onClick={closeModal}
                        >
                          <div>
                            <svg
                              className="h-5 w-5 text-white ml-14 mb-0.5 hover:bg-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                              />
                            </svg>
                          </div>

                          <button className="py-2 pl-1 text-sm font-medium text-white ">
                            コピー
                          </button>
                        </div>
                      </CopyToClipboard>
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
