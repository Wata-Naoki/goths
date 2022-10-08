import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Header } from "../header/SearchHeader";
import { Form } from "../2.articles/blogArticle";
import { blogChoiceState } from "../Atom/BlogChoiceAtom";
import { useRecoilState, useRecoilValue } from "recoil";

const BLOGIDARTICLES_QUERY = gql`
  query articlesByBlog($blogId: String!) {
    articlesByBlog {
      mockBlogsIdArticles(blogId: $blogId) {
        id
        articleId
        blog
        title
        users
        createAt
        text
      }
    }
  }
`;

const BlogIdArticle = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(BLOGIDARTICLES_QUERY, {
    variables: { blogId: id },
  });
  const blogState = useRecoilValue(blogChoiceState);
  // console.log(blogState);
  // console.log(data);
  // console.log(id);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="w-2/5">
          <div className="">
            <div className="flex justify-center ">
              <h3>{blogState}</h3>
            </div>
            {data?.articlesByBlog.data.map((x: any) => (
              <>
                <div key={x.id}>
                  <Link to={`/blogs/${id}/articles/${x.articleId}`}>
                    <h2 className="mt-8 text-2xl">{x.title}</h2>
                  </Link>

                  <div className="flex justify-between my-2 text-gray-500">
                    <h3>{x.user}</h3>
                    <h3>{x.createdAt}</h3>
                  </div>
                  <p>{x.text}</p>
                </div>
              </>
            ))}
            <div className="flex justify-center mt-10">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIdArticle;
