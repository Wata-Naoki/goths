import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { GET_BLOG } from "../../queries";
import { BlogHeader } from "../../components/header/BlogHeader";
import { Header } from "../../components/header/SearchHeader";
import { Loading } from "../../components/loading/Loading";
import { Sidebar } from "../../components/sidebar/navbar";
import { formatJst } from "../../components/formatJst/FormatJst";
import { Pagination } from "../../components/ui/pagination/pagination";

export const AdminBlogsId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [numblog, setNumBlog] = useState<number>(1);
  const [
    executeBlog,
    { data: blogData, error: blogError, loading: blogLoading, refetch },
  ] = useLazyQuery(GET_BLOG);

  const onClickFetchBlog = () => {
    setNumBlog(numblog + 1);
  };

  useEffect(() => {
    executeBlog({
      variables: { id: id, limit: numblog },
    });
    // }
  }, [numblog, blogData, id]);

  if (blogLoading) {
    return <Loading />;
  }
  if (!id) navigate("/authentication");

  return (
    <>
      <div>
        <BlogHeader blogTitle={blogData?.Blog[0]?.title} />
      </div>

      <div className="flex justify-start w-screen ">
        <div className="w-1/4">
          <Sidebar />
        </div>

        <div className="flex justify-center w-7/12 max-w-3xl px-12 mt-4 ml-12 2xl:ml-72 gap-y-8">
          {/* ゴリ押しだから改善の余地あり */}
          <div className="w-full">
            <div className="flex flex-col mt-6 gap-y-6">
              {blogData?.Blog[0]?.Articles?.map((x: any) => (
                <div key={x.id}>
                  <Link
                    className="w-full "
                    to={`/admin/blogs/${id}/articles/${x.id}`}
                    /* onClick={() => {setBlogIdStateValue(`/admin/blogs/${id}/articles/${x.id}`)}} */
                  >
                    <span className="w-full text-2xl whitespace-pre-wrap hover:text-gray-500">
                      {x.title}
                    </span>
                  </Link>

                  <div className="flex justify-between w-full pr-10 my-5">
                    <h3 className="text-gray-500">
                      {blogData.Blog[0].blog_users[0].User.name}
                    </h3>
                    <h3 className="mr-5 text-gray-500">
                      {formatJst(x.createdAt)}
                    </h3>
                  </div>

                  <p className="whitespace-pre-wrap">{x.text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center my-14">
              <Pagination
                // データの取得
                onClickFetchBlog={onClickFetchBlog}
                // データの取得数
                pageNum={numblog}
                // データの総数
                totalPageNum={
                  blogData?.Blog[0]?.Articles_aggregate?.aggregate?.count
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
