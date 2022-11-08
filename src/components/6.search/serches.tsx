import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { Form } from "../../pages/Articles/blogArticle";
import { Header } from "../header/SearchHeader";

import { Link, useParams } from "react-router-dom";
import { GET_ARTICLES, GET_USER } from "../../queries/queries";
import { formatJst } from "../FormatJst/FormatJst";

const SEARCHE_QUERY = gql`
  query search {
    search {
      mockSearch {
        title
        users
        createAt
        text
      }
    }
  }
`;

const Searches = () => {
  const { data, loading, error } = useQuery(GET_ARTICLES);

  const { text } = useParams();
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className=" w-2/5">
          <div>
            <div className="flex justify-center">
              <div>検索結果</div>
            </div>
            <div>
              {data?.Article.filter((data: any) => {
                return data.title === text;
              }).map((x: any) => (
                <div key={x.id} className="">
                  <Link to={`/blogs/articles/${x.id}`}>
                    <h2 className="mt-8 text-xl  hover:text-gray-500">
                      {x.title}
                    </h2>
                  </Link>

                  <div className="flex justify-between text-gray-500 my-2">
                    <h3>{x.users}</h3>
                    <h3 className="mr-4 text-gray-500">
                      {formatJst(x.createdAt)}
                    </h3>
                  </div>
                  <p>{x.text}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searches;
