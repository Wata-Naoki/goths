import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
import { GET_BLOGS_MODAL } from "../../queries";
import { BlogChoiceModal } from "../ui/modal/BlogChoiceModal";
import { useModalState } from "./useModalState";

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

export const ModalBlogHeader = () => {
  const { user } = useAuthContext();
  const { isOpen, closeModal, openModal } = useModalState();

  const { loading, error, data } = useQuery(GET_BLOGS_MODAL, {
    variables: { email: user?.email },
  });
  const { id } = useParams();
  const titleState = data?.Blog?.find((blog: any) => blog.id === id);
  const handleLink = (id: any) => {
    window.location.href = `/admin/blogs/${id}`;
  };

  return (
    <>
      <div
        className="flex items-center justify-end mt-2 ml-10 cursor-pointer w-96"
        onClick={openModal}
      >
        <div className="whitespace-pre-wrap">{titleState?.title}</div>

        <div className="mx-2">
          <svg
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={openModal}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <BlogChoiceModal isOpen={isOpen} closeModal={closeModal}>
        <div className="my-4 text-center">ブログ選択</div>
        <div className="flex justify-center">
          <div className="flex flex-col w-3/4">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded">
                  <table className="min-w-full divide-y ">
                    <tbody className="bg-white divide-y divide-gray-00">
                      <th className="py-2 pr-16 text-sm font-normal text-center text-gray-500 bg-gray-100">
                        タイトル
                      </th>

                      {data?.Blog?.map((x: any, index: number) => (
                        <tr key={index}>
                          <td
                            className="py-4 pl-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                              handleLink(x.id);
                            }}
                          >
                            <div className="flex justify-start">
                              <div
                                className={`relative flex items-center pr-4 ml-4  ${
                                  id === x.id ? "visible " : "invisible"
                                }`}
                              >
                                <svg
                                  className="w-6 h-6 text-green-700 "
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <div className="ml-6 ">
                                <div className="focus:outline-none">
                                  {x?.title}
                                </div>
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
      </BlogChoiceModal>
    </>
  );
};
