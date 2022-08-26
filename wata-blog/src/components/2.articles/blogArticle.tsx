import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Header } from "../header/SearchHeader";

export const BLOGS_QUERY = gql`
  query blogs {
    blogs {
      articles {
        title
        users
        createAt
        text
      }
    }
  }
`;

const ARTICLES_QUERY = gql`
  query posts($first: Int!, $page: int!) {
    posts(first: $first, page: $page) {
      articles {
        title
        users
        createAt
        text
      }
    }
  }
`;

function BlogArticle() {
  const { loading, error, data, fetchMore } = useQuery(ARTICLES_QUERY, {
    variables: {
      first: 0,
      page: 10,
    },
  });
  const {
    loading: blogLoading,
    error: blogError,
    data: blogdata,
  } = useQuery(BLOGS_QUERY);

  // console.log(data);
  const [page, setPage] = useState<"新着記事" | "新着ブログ">("新着記事");

  const handleChange = (e: any) => {
    fetchMore({
      variables: {
        page: data?.posts.data.length,
      },
    });
  };

  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className="flex justify-center w-full">
        <div className="w-2/5">
          <div className="flex justify-center ">
            <button
              className={`mr-8 ${
                page == "新着記事"
                  ? "text-green-700 underline underline-offset-8 decoration-1 "
                  : "text-black"
              }`}
              onClick={() => {
                setPage("新着記事");
              }}
            >
              新着記事
            </button>

            <button
              className={`mr-8 ${
                page == "新着ブログ"
                  ? "text-green-700 underline underline-offset-8 decoration-1 "
                  : "text-black"
              }`}
              onClick={() => {
                setPage("新着ブログ");
              }}
            >
              新着ブログ
            </button>
          </div>

          {page === "新着記事" ? (
            <div>
              {data?.posts.data.map((x: any) => (
                <div key={x.id} className="my-8">
                  <h2 className="text-2xl">{x.title}</h2>

                  <div className="flex justify-between my-2">
                    <h3>{x.blog}</h3>
                    <h3>{x.createAt}</h3>
                  </div>

                  <p>{x.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {blogdata?.blogs.data.map((x: any) => (
                <div
                  key={x.id}
                  className="flex justify-between items-center my-8"
                >
                  <div>
                    <h2 className="text-2xl">{x.title}</h2>
                    <h3 className="my-2 text-gray-500">{x.users}</h3>
                  </div>
                  <Link to={`/blogs/${x.id}/articles`}>
                    <div className="flex justify-center items-center">
                      <div className="text-green-600">ブログ記事を見る </div>
                      <svg
                        className="h-5 w-5 text-green-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </div>{" "}
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center mb-10">
            <form onClick={handleChange}>
              <button
                type="submit"
                className="bg-emerald-700 text-white text-sm py-2  px-4  font-medium rounded"
              >
                さらに読み込む
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Manage = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
    // console.log("You clicked submit.");
  }
  return (
    <>
      <div className="flex flex-wrap items-stretch ">
        <div className="relative flex items-center ">
          <svg
            className="h-4 w-4 text-white absolute ml-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
            />
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="bg-emerald-700 text-white text-sm py-1.5  px-4 pl-6  font-medium rounded"
          >
            管理画面
          </button>
        </form>
      </div>
    </>
  );
};

export const Form = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
    // console.log("You clicked submit.");
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className="bg-emerald-700 text-white text-sm py-2  px-4  font-medium rounded"
      >
        さらに読み込む
      </button>
    </form>
  );
};

export default BlogArticle;
