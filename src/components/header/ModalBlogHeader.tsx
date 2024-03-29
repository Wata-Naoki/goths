import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
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
  const { userValue, setUserValue } = useLocalStorage();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isOpen, closeModal, openModal } = useModalState();

  const [execute, { loading, error, data }] = useLazyQuery(GET_BLOGS_MODAL, {
    variables: { email: userValue.email, id: id },
  });
  // TODO: バックエンドのvariablesのidから取得したデータを使って、選択したブログのタイトルを表示する.
  const titleState = data?.Blog?.find((blog: any) => blog?.id === id);

  const handleLink = (id: string) => {
    // window.location.href = `/admin/blogs/${id}`;
    navigate(`/admin/blogs/${id}`);
  };
  useEffect(() => {
    execute();
  }, [id]);

  return (
    <>
      <div
        className="flex items-center justify-end mt-2 ml-10 cursor-pointer w-96"
        onClick={openModal}
      >
        <div className="whitespace-pre-wrap">{data?.Blog_by_pk?.title}</div>

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

                      {data?.Blog?.map((blog: any, index: number) => (
                        <tr key={index}>
                          <td
                            className="py-4 pl-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                              handleLink(blog.id);
                            }}
                          >
                            <div className="flex justify-start">
                              <div
                                className={`relative flex items-center pr-4 ml-4  ${
                                  id === blog.id ? "visible " : "invisible"
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
                                  {blog?.title}
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
