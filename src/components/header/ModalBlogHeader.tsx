import { gql, useQuery } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useAuthContext } from "../../AuthContext";
import { GET_BLOGS_MODAL } from "../../queries/queries";

import { blogChoiceState, blogIdState } from "../Atom/BlogChoiceAtom";

// const BLOG_CHOICE_QUERY = gql`
//   query blogChoice {
//     blogChoice {
//       mockBlogChoice {
//         mockMyBlogs {
//           id
//         }
//         blogName
//       }
//     }
//   }
// `;

export const ModalBlogHeader = ({ blogTitle }: any) => {
  console.log(blogTitle);
  const { user } = useAuthContext();

  const { loading, error, data } = useQuery(GET_BLOGS_MODAL, {
    variables: { email: user?.email },
  });
  console.log(data);

  const { id } = useParams();
  const titleState = data?.Blog.find((blog: any) => blog.id === id);
  console.log(titleState);

  const [isOpen, setIsOpen] = useState(false);

  // const [blogState, setBlogState] = useRecoilState(blogChoiceState);
  // const blogIdStateValue = useRecoilValue(blogIdState);

  //const targetArticle = data?.blogChoice.data.find((x: any) => x.mockMyBlogs.id === id);
  //blogState = targetArticle?.blogName

  // console.log(blogIdState);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleLink = (id: any) => {
    window.location.href = `/admin/blogs/${id}`;
  };

  return (
    <>
      <div className="flex juestify-center items-center mt-2 ">
        <div>{titleState?.title}</div>

        <div className="mx-2">
          <svg
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={openModal}
          >
            {" "}
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all focus:outline-none">
                  <Dialog.Title
                    as="h3"
                    className="text font-medium leading-6 text-gray-900"
                  >
                    <div className="text-center my-4">ブログ選択</div>
                    <div className="flex justify-center">
                      <div className="flex flex-col w-3/4">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded">
                              <table className="min-w-full divide-y ">
                                <tbody className="bg-white divide-y divide-gray-00">
                                  <th className="py-2 pr-16 text-gray-500 bg-gray-100 text-sm text-center font-normal">
                                    タイトル
                                  </th>

                                  {data?.Blog.map((x: any, index: number) => (
                                    <tr key={index}>
                                      <td className=" py-4 pl-2 hover:bg-gray-100 ">
                                        <div className="flex justify-start">
                                          <div
                                            className={`relative flex items-center pr-4 ml-4  ${
                                              id === x.id
                                                ? "visible "
                                                : "invisible"
                                            }`}
                                          >
                                            <svg
                                              className="h-6 w-6 text-green-700 "
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            >
                                              {" "}
                                              <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                          </div>
                                          <div className="ml-6 ">
                                            <button
                                              className="focus:outline-none"
                                              onClick={() => {
                                                handleLink(x.id);
                                              }}
                                            >
                                              {x.title}
                                            </button>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
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
