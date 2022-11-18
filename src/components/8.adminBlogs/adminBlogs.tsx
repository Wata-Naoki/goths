import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useAuthContext } from "../../AuthContext";
import { GET_BLOGS, GET_USER_BLOGS } from "../../queries/queries";

import { blogChoiceState } from "../Atom/BlogChoiceAtom";
import { CreateNewBlog } from "../CreateNewBlog/CreateNewBlog";
import { Header } from "../header/SearchHeader";
import { Loading } from "../Loading/Loading";
import { Modal } from "../modal/Modal";

const ARTICLESBYMYBLOG_QUERY = gql`
  query myBlogsByUser {
    myBlogsByUser {
      mockMyBlogs {
        id
        title
        user
      }
    }
  }
`;

const ARTICLESBYBLOG_QUERY = gql`
  query blogsByUser {
    blogsByUser {
      mockAdminBlogs {
        id
        title
        user
      }
    }
  }
`;

const BLOG_CHOICE_QUERY = gql`
  query blogChoice {
    blogChoice {
      mockBlogChoice {
        mockMyBlogs {
          id
        }
        blogName
      }
    }
  }
`;

export const AdminBlogs = () => {
  const {
    loading: myblogloading,
    error: myblogerror,
    data: myblogdata,
  } = useQuery(ARTICLESBYMYBLOG_QUERY);
  const { loading, error, data } = useQuery(ARTICLESBYBLOG_QUERY);

  // console.log(data);
  const [page, setPage] = useState<"Myブログ" | "編集者ブログ">("Myブログ");

  const pageColor = "text-green-700 underline underline-offset-8 decoration-1";

  /* const {
    loading: blogLoading,
    error: blogError,
    data: blogData,
  } = useQuery(BLOG_CHOICE_QUERY); */

  const [blogState, setBlogState] = useRecoilState(blogChoiceState);
  // console.log(blogState)

  const [numblog, setNumBlog] = useState<number>(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [
    executeBlog,
    { data: blogData, error: blogError, loading: blogLoading },
  ] = useLazyQuery(GET_USER_BLOGS);
  console.log(blogData);

  const onClickFetchBlog = () => {
    setNumBlog(numblog + 1);
    //console.log(num);
  };
  const { user } = useAuthContext();

  useEffect(() => {
    // if (id='1bf773a5-9c62-43bc-b5ce-43633fdb3b14') {
    console.log(user.email);
    executeBlog({
      variables: { email: user?.email, limit: numblog },
    });
    // }
  }, [executeBlog, numblog]);
  // console.log(blogData);

  // console.log(articeData.Article[0]);

  if (blogLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      <div className="flex justify-center w-full ">
        <div className="w-1/3">
          <div>
            <div className="flex justify-between">
              <div>ブログ管理</div>
              <div>
                <div className="flex flex-wrap items-stretch ">
                  <div className="relative flex items-center ">
                    <svg
                      className="h-4 w-4 text-white absolute ml-1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />{" "}
                      <polyline points="14 2 14 8 20 8" />{" "}
                      <line x1="12" y1="18" x2="12" y2="12" />{" "}
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="bg-emerald-700 text-white text-sm py-1.5  px-4 pl-6  font-medium rounded"
                  >
                    ブログ新規作成
                  </button>
                </div>
                <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                  <CreateNewBlog setIsModalOpen={setIsModalOpen} />
                </Modal>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex justify-center my-5">
            <button
              onClick={() => {
                setPage("Myブログ");
              }}
              className={`mr-8 ${page === "Myブログ" ? `${pageColor}` : ""}`}
            >
              Myブログ
            </button>

            <button
              onClick={() => {
                setPage("編集者ブログ");
              }}
              className={`mr-8 ${
                page === "編集者ブログ" ? `${pageColor}` : ""
              }`}
            >
              編集者ブログ
            </button>
          </div>
          {page === "Myブログ" ? (
            <div>
              {blogData?.Blog.map((x: any) => (
                <div key={x.id} className="flex justify-between mt-10">
                  <div>
                    <h2>{x.title}</h2>
                    <h3>{x.blog_users[0].User.name}</h3>
                  </div>
                  <Link to={`/admin/blogs/${x.id}`}>
                    <div className="flex items-center justify-center">
                      <div className="text-green-600">ブログ管理画面へ </div>
                      <svg
                        className="w-5 h-5 text-green-500"
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
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {data?.blogsByUser.data.map((x: any) => (
                <div key={x.id} className="flex justify-between mt-10">
                  <div>
                    <h2>{x.title}</h2>
                    <h3>{x.user}</h3>
                  </div>
                  <Link to={`/admin/blogs/${x.id}`}>
                    <div className="flex items-center justify-center">
                      <div className="text-green-600">ブログ管理画面へ </div>
                      <svg
                        className="w-5 h-5 text-green-500"
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
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center my-10">
            <button
              onClick={onClickFetchBlog}
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white rounded bg-emerald-700"
            >
              さらに読み込む
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
