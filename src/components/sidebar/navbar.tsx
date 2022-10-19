import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { blogIdState } from "../Atom/BlogChoiceAtom";

export const Sidebar = () => {
  const { id } = useParams();
  const blogIdStateValue = useRecoilValue(blogIdState);
  // console.log(blogIdStateValue);
  const redirectToGoogle = () => {
    window.location.href = "https://www.google.com/?hl=ja";
  };

  const articleList = () => {
    window.location.href = `/admin/blogs/${id}`;
  };
  const createArticle = () => {
    window.location.href = `/admin/blogs/${id}/articles/create`;
  };

  const handleEditors = () => {
    window.location.href = `/admin/blogs/${id}/editors`;
  };
  const handleSetting = () => {
    window.location.href = `/admin/blogs/${id}/config`;
  };
  return (
    <>
      {/*  <div>Sidebar</div> */}
      <br />

      <div className="w-60 h-5/6 px-1 flex flex-col items-start justify-between sticky top-0">
        <div>
          <div className="mb-2">
            <button
              onClick={articleList}
              className={`hover:bg-teal-100 relative w-56 flex items-center text-sm py-2 px-4 text-gray-600 ${
                window.location.pathname !==
                  `${blogIdStateValue}/articles/create` &&
                window.location.pathname !== `${blogIdStateValue}/editors` &&
                window.location.pathname !== `${blogIdStateValue}/config`
                  ? "bg-teal-100 "
                  : ""
              }`}
            >
              <div>
                <svg
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              <div className="ml-1">記事一覧</div>
            </button>
          </div>
          <div className="mb-2">
            <button
              onClick={createArticle}
              className={`hover:bg-teal-100 relative w-56 flex items-center text-sm py-2 px-4 text-gray-600 ${
                window.location.pathname ===
                `${blogIdStateValue}/articles/create`
                  ? "bg-teal-100 "
                  : ""
              }`}
            >
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>

              <div className="ml-1">記事作成</div>
            </button>
          </div>
          <div className="">
            <button
              onClick={handleEditors}
              className={`hover:bg-teal-100 relative w-56 flex items-center text-sm py-2 px-4 text-gray-600 ${
                window.location.pathname === `${blogIdStateValue}/editors`
                  ? "bg-teal-100 "
                  : ""
              }`}
            >
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>

              <div className="ml-1">編集者管理</div>
            </button>
          </div>
        </div>

        <div className="mt-96">
          <div className="mt-24">
            {/* flexかなんかで記事一覧からタイトルのかたまりと設定〜ヘルプのかたまりで分けた方がいいかも */}
            <button
              onClick={handleSetting}
              className={`hover:bg-teal-100 relative w-56 flex items-center text-sm py-2 px-4 text-gray-600 ${
                window.location.pathname === `${blogIdStateValue}/config`
                  ? "bg-teal-100 "
                  : ""
              }`}
            >
              <div>
                <svg
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <circle cx="12" cy="12" r="3" />{" "}
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>

              <div className="ml-1">設定</div>
            </button>
          </div>

          <div className="">
            <button className="relative w-56 flex items-center text-sm py-2 px-4 text-gray-600 hover:bg-teal-100">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="ml-1" onClick={redirectToGoogle}>
                ヘルプ
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
