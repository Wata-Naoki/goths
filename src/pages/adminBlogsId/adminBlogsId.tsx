import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Form } from "../Articles/blogArticle";
import { GET_BLOG } from "../../queries/queries";
import {
  adminBlogState,
  blogChoiceState,
  blogIdState,
} from "../../components/Atom/BlogChoiceAtom";
import { BlogHeader } from "../../components/header/BlogHeader";
import { Header } from "../../components/header/SearchHeader";
import { Loading } from "../../components/Loading/Loading";
import { Sidebar } from "../../components/sidebar/navbar";

const ADMINARTICLESBYBLOG_QUERY = gql`
  query adminArticlesByBlog {
    adminArticlesByBlog {
      mockAdminBlogsArticles {
        mockMyBlogs {
          id
        }
        blog
        id
        title
        user
        createAt
        text3
      }
    }
  }
`;

export const AdminBlogsId = () => {
  // const { loading, error, data } = useQuery(ADMINARTICLESBYBLOG_QUERY);
  const { id } = useParams();
  //const [adminBlogFlag, setAdminBlogFlag] = useRecoilState(adminBlogState);

  // const adminBlogFlag = useRecoilValue(adminBlogState);
  /* .filter((x: any) => x.blog === blogState) */
  // const [blogIdStateValue, setBlogIdStateValue] = useRecoilState(blogIdState);

  // const targetBlog = [
  //   data?.adminArticlesByBlog.data
  //     .filter((x: any) => x.mockMyBlogs.id === id)
  //     .filter((x: any) => x.blog === blogState),
  // ];
  // console.log(targetBlog);
  // setBlogIdStateValue(window.location.pathname);
  // console.log(blogIdStateValue);

  // console.log(data);
  // console.log(id);

  const [numblog, setNumBlog] = useState<number>(1);
  const [
    executeBlog,
    { data: blogData, error: blogError, loading: blogLoading, refetch },
  ] = useLazyQuery(GET_BLOG);

  console.log(blogData);

  const onClickFetchBlog = () => {
    setNumBlog(numblog + 1);
    //console.log(num);
  };

  useEffect(() => {
    // if (id='1bf773a5-9c62-43bc-b5ce-43633fdb3b14') {
    /* refetch({
      variables: { id: id, limit: numblog },
    }); */

    executeBlog({
      variables: { id: id, limit: numblog },
    });

    // }
  }, [executeBlog, numblog, id]);

  if (blogLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <BlogHeader />
      </div>

      <div className="flex justify-between flex-wrap ">
        <div>
          <Sidebar />
        </div>

        <div className="w-2/5 flex justify-center mr-96 mt-4">
          {/* ゴリ押しだから改善の余地あり */}

          <div>
            <div>
              {blogData?.Blog[0].Articles.map((x: any) => (
                <div key={x.id}>
                  <Link
                    to={`/admin/blogs/${id}/articles/${x.id}`}
                    /* onClick={() => {setBlogIdStateValue(`/admin/blogs/${id}/articles/${x.id}`)}} */ state={{
                      title: x.title,
                      text: x.text,
                    }}
                  >
                    <h2 className="text-2xl mt-8">{x.title}</h2>
                  </Link>

                  <div className="flex justify-between my-2">
                    <h3 className="text-gray-500">
                      {blogData.Blog[0].blog_users[0].User.name}
                    </h3>
                    <h3 className="text-gray-500">{x.createdAt}</h3>
                  </div>

                  <p>{x.text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center my-10">
              <button
                onClick={onClickFetchBlog}
                type="submit"
                className="bg-emerald-700 text-white text-sm py-2  px-4  font-medium rounded"
              >
                さらに読み込む
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
