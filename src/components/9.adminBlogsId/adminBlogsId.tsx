import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Form } from "../2.articles/blogArticle";
import { blogChoiceState, blogIdState } from "../Atom/BlogChoiceAtom";
import { BlogHeader } from "../header/BlogHeader";
import { Header } from "../header/SearchHeader";
import { Sidebar } from "../sidebar/navbar";

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
  const { loading, error, data } = useQuery(ADMINARTICLESBYBLOG_QUERY);
  let { id } = useParams();
  const blogState = useRecoilValue(blogChoiceState);
  /* .filter((x: any) => x.blog === blogState) */
  const [blogIdStateValue, setBlogIdStateValue] = useRecoilState(blogIdState);

  const targetBlog = [
    data?.adminArticlesByBlog.data
      .filter((x: any) => x.mockMyBlogs.id === id)
      .filter((x: any) => x.blog === blogState),
  ];
  // console.log(targetBlog);
  setBlogIdStateValue(window.location.pathname);
  // console.log(blogIdStateValue);

  // console.log(data);
  // console.log(id);
  return (
    <>

      <div>
        <BlogHeader />
      </div>

      <div className="flex justify-between flex-wrap ">
        <div>
          <Sidebar />
        </div>

        <div className="w-2/5 flex justify-center mr-72 ">
          {/* ゴリ押しだから改善の余地あり */}

          <div>
            <div>
              {data?.adminArticlesByBlog.data
                .filter((x: any) => x.mockMyBlogs.id === id)
                .filter((x: any) => x.blog === blogState)
                .map((x: any) => (
                  <div key={x.id}>
                    <Link to={`/admin/blogs/${id}/articles/${x.id}`} /* onClick={() => {setBlogIdStateValue(`/admin/blogs/${id}/articles/${x.id}`)}} */ state={{title: x.title, text: x.text}}>
                      <h2 className="text-2xl mt-8">{x.title}</h2>
                    </Link>

                    <div className="flex justify-between">
                      <h3 className="text-gray-500">{x.user}</h3>
                      <h3 className="text-gray-500">{x.createAt}</h3>
                    </div>

                    <p>{x.text}</p>
                  </div>
                ))}
            </div>

            <div className="flex justify-center mt-16">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
