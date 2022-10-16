import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { GET_ARTICLE, UPDATE_DELETE_ARTICLE } from "../../queries/queries";
import { UpdateDeleteArticleMutation } from "../../types/generated/graphql.tsx/graphql";
import { adminBlogState, blogIdArticleEditState } from "../Atom/BlogChoiceAtom";
import DeleteButton from "../deletButton/atricleDeleteButton";

import { BlogHeader } from "../header/BlogHeader";
import { Header } from "../header/SearchHeader";
import { Loading } from "../Loading/Loading";
import { Sidebar } from "../sidebar/navbar";

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
  console.log(data);



  const [update_Article_by_pk, { loading: deleteLoading, error: deleteError }] =
    useMutation<UpdateDeleteArticleMutation>(UPDATE_DELETE_ARTICLE);

  // const deleteArticle = async () => {
  //   delete_blog_user_by_pk({ variables: { id: articleId } });
  // };

  // const [delete_Article_by_pk] = useMutation(DELETE_ARTICLE, {
  //   update(cache, { data: { delete_Article_by_pk } }) {
  //     cache.modify({
  //       fields: {
  //         Article(existingArticle, { readField }) {
  //           return existingArticle.filter((article: any) => {
  //             articleId !== readField("id", article)
  //           });
  //         },
  //       },
  //     });
  //   },
  // });

  /* 
  const [delete_users_by_pk] = useMutation<DeleteUserMutation>(DELETE_USER, {
    update(cache, { data: { delete_users_by_pk } }) {
      cache.modify({
        fields: {
          users(existingUsers, { readField }) {
            return existingUsers.filter((user) => {
              delete_users_by_pk !== readField('id', user)
            })
          },
        },
      })
    },
  })
  */

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

  // useEffect(() => {
  //   execute({ variables: { id: articleId } });
  //   // console.log(id);
  //   // console.log(blogArticlesData);
  // }, [articleId, execute]);
  // console.log(blogArticleData);

  /* console.log(loading);
  console.log(error); */

  // console.log(data);
  // console.log(articleId);
  // console.log(articleId);
  // const targetArticle = data?.adminArticle.data.find(
  //   (x: any) => x.id === articleId
  // );
  // const [articleEditValue, setArticleEditValue] = useRecoilState(
  //   blogIdArticleEditState
  // );
  // console.log(articleEditValue);
  // setArticleEditValue(targetArticle);

  // const [deleteArticle, { loading: delloading, error: delerror }] =
  //   useMutation(DELETE_ARTICLE);

  // console.log(result);

  return (
    <>
      <div>
        <BlogHeader />
      </div>

      <div className="flex justify-between flex-wrap ">
        <div className="w-1/4">
          <Sidebar />
        </div>

        <div className="w-3/4 ">
          <div className="flex justify-center w-3/5 ml-52 mb-10">
            {/* ここも割とゴリ押し感強め */}

            <div>
              <div className="flex justify-end my-10">
                <div>
                  <Link
                    to={`/admin/blogs/${blogId}/articles/${articleId}/edit`}
                  >
                    <div className="flex flex-wrap items-stretch mr-2">
                      <div className="relative flex items-center ">
                        <svg
                          className="h-5 w-5 text-white absolute ml-2"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                          <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                      </div>

                      <button
                        type="submit"
                        className=" bg-emerald-700 text-white text-sm py-2  pr-4 pl-8  font-medium rounded-md"
                      >
                        編集
                      </button>
                    </div>
                  </Link>
                </div>
                <div>
                  <DeleteButton
                    onClick={async () => {
                      // deleteArticle({
                      //   variables: {
                      //     id: articleId,
                      //   },
                      // });
                      await handleChange();
                      window.location.href = `/admin/blogs/${blogId}`;
                      //navigate(`/admin/blogs/${blogId}`);
                    }}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h2 className="text-2xl mt-8">{data?.Article[0].title}</h2>
                  <div className="flex justify-between mb-5">
                    <h3 className="text-gray-500">
                      {data?.Article[0].User.name}
                    </h3>

                    <h3>{data?.Article[0].createdAt}</h3>
                  </div>

                  <p className="mb-8">{data?.Article[0].all_text}</p>
                  <p className="mb-8">{data?.Article[0].all_text}</p>
                  <p className="mb-8">{data?.Article[0].all_text}</p>
                </div>
              </div>
              <div className="flex justify-end text-gray-500">
                <div>
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </div>{" "}
                <div>32</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
