import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
export const Quote = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
            className="bg-green-700 px-2  py-2  rounded-full"
            onClick={() => {
              openModal();
            }}
          >
            <svg
              className="h-6 w-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M3 12h1M12 3v1M20 12h1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7" />{" "}
              <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />{" "}
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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-center text-center">
                      <div>
                        <div className="">Quote</div>

                        <div className="mt-4 text-sm text-gray-500 px-10">
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
                    <div className="mt-2 flex justify-between w-full">
                      <button
                        type="button"
                        className="w-1/2 mr-4 inline-flex justify-center rounded-md border border-inherit bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 focus:outline-none "
                        onClick={closeModal}
                      >
                        Close
                      </button>

                      <div className="relative flex items-center hover:bg-green-600">
                        <svg
                          className="h-5 w-5 text-white absolute ml-14 mb-0.5 hover:bg-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                          />
                        </svg>
                      </div>
                      <CopyToClipboard
                        text={`${posts.content}\n${posts.author}`}
                      >
                        <button
                          type="button"
                          className="w-1/2 justify-center rounded-md border border-inherit bg-green-700 pl-3 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none "
                          onClick={closeModal}
                        >
                          コピー
                        </button>
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
