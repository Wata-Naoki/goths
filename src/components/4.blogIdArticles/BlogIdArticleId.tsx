import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Header } from "../header/SearchHeader";

const BLOGIDARTICLESID_QUERY = gql`
  query article {
    article {
      mockBlogsIdArticles {
        articleId
        blog
        title
        user
        createdAt
        text
        tags
      }
    }
  }
`;

const BlogIdArticleId = () => {
  const { loading, error, data } = useQuery(BLOGIDARTICLESID_QUERY);
  const { id, articleId } = useParams();

  
  const targetArticle = data?.article.data.find(
    (x: any) => x.articleId === articleId
  );

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="w-2/5">
          <div>
            <div className="flex justify-center mb-5 text-xl">
              <div>{targetArticle?.blog}</div>
            </div>
            <div className="text-2xl">{targetArticle?.title}</div>
            <div className="flex justify-between mt-1 mb-4 text-gray-500">
              <div className="text-gray-500">{targetArticle?.user}</div>
              <div>{targetArticle?.createdAt}</div>
            </div>
            <p className="mb-5">{targetArticle?.text}</p>
            <p className="mb-5">{targetArticle?.text}</p>
            <p className="">{targetArticle?.text}</p>

            <div className="flex justify-end text-gray-500 mt-5">
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
              </div>
              <div>{targetArticle?.tags}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIdArticleId;
