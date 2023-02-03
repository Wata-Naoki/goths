import React, { useEffect, useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/header/SearchHeader";
import { GET_ARTICLE, GET_BLOG_ARTICLES } from "../../queries";
import { Loading } from "../../components/loading/Loading";
import { formatJst } from "../../components/formatJst/FormatJst";
import { Pagination } from "../../components/ui/pagination/pagination";

export const BlogIdArticle = () => {
  const { id } = useParams();
  const [numblog, setNumBlog] = useState(1);

  const onClickFetchBlog = () => {
    setNumBlog(numblog + 2);
  };

  const [
    execute,
    {
      data: blogArticlesData,
      error: blogArticlesError,
      loading: blogArticlesLoading,
    },
  ] = useLazyQuery(GET_BLOG_ARTICLES);

  useEffect(() => {
    if (id) {
      execute({ variables: { id: id, limit: numblog } });
    }
  }, [execute, id, numblog]);

  if (blogArticlesLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="w-2/5 max-w-3xl 2xl:w-1/4">
          <div className="">
            <div className="flex justify-center ">
              <h3 className="text-xl text-gray-800">
                {blogArticlesData?.Blog[0].title}
              </h3>
            </div>
            {blogArticlesData?.Blog[0].Articles.map((x: any) => (
              <div key={x.id} className="my-12 2xl:my-16">
                <Link to={`/blogs/articles/${x?.id}`} className="mt-8 text-2xl">
                  <span className="hover:text-gray-500">{x.title}</span>
                </Link>

                <div className="flex justify-between my-2 text-gray-500">
                  <h3>{x.User.name}</h3>
                  <h3 className="mr-4 text-gray-500">
                    {formatJst(x.createdAt)}
                  </h3>
                </div>
                <p>{x.text}</p>
              </div>
            ))}
            <div className="flex justify-center my-10">
              <Pagination
                onClickFetchBlog={onClickFetchBlog}
                pageNum={numblog}
                totalPageNum={
                  blogArticlesData?.Blog[0]?.Articles_aggregate?.aggregate
                    ?.count
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
