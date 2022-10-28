import { gql, useMutation } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { CREATE_USER_ONE } from "../../queries/queries";

// const USER_ADD = gql`
//   mutation UserAdd($input: input!) {
//     UserAdd(input: $input) {
//       email
//     }
//   }
// `;

export const AddButton = () => {
  const { id } = useParams();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [insert_User_one, { loading, error }] = useMutation(CREATE_USER_ONE);

  const handleSubmit = async () => {
    if (id) {
      try {
        await insert_User_one({
          variables: {
            blog_id: id,
            name: name,
            email: email,
          },
        });
        alert("変更が保存されました");
      } catch (err: any) {
        alert(err.message);
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
      <div className="flex flex-wrap items-stretch ">
        <div className="relative flex items-center">
          <button
            onClick={openModal}
            className="bg-green-700 px-2  py-1  rounded-full"
          >
            追加
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

                          <div className="mt-4 text-sm text-gray-500 px-10">
                            <p>名前を入力してください。</p>
                            <input
                              value={name}
                              type="name"
                              onChange={(e: any) => setName(e.target.value)}
                              id="name"
                              required
                              name="name"
                              className="mb-4 text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-80 "
                            />
                            <p>Eメールアドレスを入力してください。</p>
                            <input
                              value={email}
                              type="email"
                              onChange={(e: any) => setEmail(e.target.value)}
                              id="email"
                              required
                              name="email"
                              className="my-2 text-left border border-slate-400 rounded focus:outline-0 pl-1  py-1 w-80 "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between w-full">
                        <button
                          type="button"
                          className="w-1/2 mr-4 inline-flex justify-center rounded-md border border-inherit bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 focus:outline-none "
                          onClick={closeModal}
                        >
                          Cancel
                        </button>

                        <div className="relative flex items-center "></div>
                        <button
                          type="submit"
                          className="w-1/2 inline-flex justify-center rounded-md border border-inherit bg-green-700 pl-3 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none "
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
