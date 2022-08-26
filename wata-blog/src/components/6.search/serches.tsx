import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { Form } from "../2.articles/blogArticle";
import { Header} from "../header/SearchHeader";

import { useParams } from "react-router-dom";

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
  const { loading, error, data } = useQuery(SEARCHE_QUERY);

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
              {data?.search.data
                .filter((data: any) => {
                  return data.title === text;
                })
                .map((x: any) => (
                  <div key={x.id} className="">
                    <h2 className="mt-8 text-xl  ">{x.title}</h2>
                    <div className="flex justify-between text-gray-500 my-2">
                      <h3>{x.users}</h3>
                      <h3>{x.createdAt}</h3>
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
