import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { GET_ARTICLE, UPDATE_DELETE_ARTICLE } from "../../queries";
import { UpdateDeleteArticleMutation } from "../../types/generated/graphql.tsx/graphql";

import DeleteButton from "../../components/ui/deletButton/atricleDeleteButton";

import { BlogHeader } from "../../components/header/BlogHeader";
import { Header } from "../../components/header/SearchHeader";
import { Loading } from "../../components/loading/Loading";
import { Sidebar } from "../../components/sidebar/navbar";
import { formatJst } from "../../components/formatJst/FormatJst";

const ADMINBLOGSIDARTICLESID_QUERY = gql`
  query adminArticle {
    adminArticle {
      mockAdminBlogsArticles {
        blog
        id
        title
        user
        createAt
        text
      }
    }
  }
`;

// const DELETE_ARTICLE = gql`
//   mutation DeleteArticle($id: ID!) {
//     DeleteArticle(id: $id) {
//       mockAdminBlogsArticles {
//         id
//       }
//     }
//   }
// `;

export const AdminBlogsIdArticlesId = () => {
  const { id: blogId, articleId } = useParams();
  const navigate = useNavigate();
  // const [adminBlogFlag, setAdminBlogFlag] = useRecoilState(adminBlogState);

  const [
    execute,
    {
      data: blogArticleData,
      error: blogArticlesError,
      loading: blogArticlesLoading,
    },
  ] = useLazyQuery(GET_ARTICLE);

  const { data, loading, error } = useQuery(GET_ARTICLE, {
    variables: { id: articleId },
  });

  const [update_Article_by_pk, { loading: deleteLoading, error: deleteError }] =
    useMutation<UpdateDeleteArticleMutation>(UPDATE_DELETE_ARTICLE);

  const handleChange = async () => {
    if (articleId) {
      try {
        await update_Article_by_pk({
          variables: { id: articleId, status: false },
        });
        //await setAdminBlogFlag(!adminBlogFlag);
        alert("変更が保存されました");
        // navigate(-1);
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>"エラーが発生しました。"</div>;
  }

  return (
    <>
      <div>
        <BlogHeader />
      </div>

      <div className="flex justify-start w-screen">
        <div className="w-1/4">
          <Sidebar />
        </div>

        <div className="w-6/12">
          <div className="flex items-center justify-center w-full pl-24 pr-20 my-10 mb-10 ml-12">
            {/* ここも割とゴリ押し感強め */}

            <div className="flex flex-col w-full">
              <div className="flex justify-end w-full ">
                <div>
                  <Link
                    to={`/admin/blogs/${blogId}/articles/${articleId}/edit`}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center justify-center py-2 pr-4 mr-2 rounded-md focus:outline-none focus-visible:ring-opacity-75 hover:bg-emerald-600 bg-emerald-700">
                      <div className="flex items-center ">
                        <svg
                          className="w-5 h-5 ml-2 text-white "
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                      </div>

                      <div className="ml-1 text-sm font-medium text-white ">
                        編集
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <DeleteButton
                    onClick={async () => {
                      await handleChange();
                      window.location.href = `/admin/blogs/${blogId}`;
                      //navigate(`/admin/blogs/${blogId}`);
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-col w-full gap-y-6">
                  <h2 className="mt-8 text-2xl">{data?.Article[0].title}</h2>
                  <div className="flex justify-between w-full my-5">
                    <h3 className="text-gray-500">
                      {data?.Article[0].User.name}
                    </h3>

                    <h3 className="mr-4 text-gray-500">
                      {formatJst(data?.Article[0].createdAt)}
                    </h3>
                  </div>

                  <div className="flex flex-col w-full gap-y-6">
                    <p className="">{data?.Article[0].all_text}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-5 text-gray-500">
                <div>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
