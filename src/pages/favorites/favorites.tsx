import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Form } from "../Articles/blogArticle";
import { Header } from "../../components/header/SearchHeader";

const FAVORITES_QUERY = gql`
  query favoriteArticles {
    favoriteArticles {
      mockFavoriteArticles{
        title
        users
        createAt
        text
      }
    }
  }
`;

const Favorites = () => {
  const { loading, error, data } = useQuery(FAVORITES_QUERY);
  const { id, articleId } = useParams();

  // console.log(data);
  // console.log(id, articleId);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex justify-center">
        <div className="w-2/5">
          <div>
            <div className="flex justify-center">
              <div>お気に入り</div>
            </div>

            <div>
              {data?.favoriteArticles.data.map((x: any) => (
                <div key={x.id}>
                  <h2 className="mt-8 text-xl">{x.title}</h2>
                  
                  <div className="flex justify-between text-gray-500 my-2">
                    <h3>{x.users}</h3>
                    <h3>{x.createAt}</h3>
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

export default Favorites;
