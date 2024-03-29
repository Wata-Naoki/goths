import { Link, useNavigate, useParams } from "react-router-dom";

export const Sidebar = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const articleList = () => {
    // navigate(`/admin/blogs/${id}`);
    window.location.href = `/admin/blogs/${id}`;
  };
  const createArticle = () => {
    navigate(`/admin/blogs/${id}/articles/create`);
  };

  const handleEditors = () => {
    navigate(`/admin/blogs/${id}/editors`);
  };
  const handleSetting = () => {
    navigate(`/admin/blogs/${id}/config`);
  };
  return (
    <>
      {/*  <div>Sidebar</div> */}

      <div className="sticky top-0 flex flex-col items-start justify-between pr-1 w-60">
        <div>
          <div className="">
            <button
              onClick={articleList}
              className={`hover:bg-teal-100 relative w-56 flex items-center text-sm py-3 px-4 text-gray-600 ${
                window.location.pathname === `/admin/blogs/${id}`
                  ? "bg-teal-100 "
                  : ""
              }`}
            >
              <div className="mr-1">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              <div className="">記事一覧</div>
            </button>
          </div>
          <div className="">
            <button
              onClick={createArticle}
              className={`hover:bg-teal-100 relative w-56 flex items-center text-sm py-3 px-4 text-gray-600 ${
                window.location.pathname ===
                `/admin/blogs/${id}/articles/create`
                  ? "bg-teal-100 "
                  : ""
              }`}
            >
              <div className="mr-1">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>

              <div className="">記事作成</div>
            </button>
          </div>
          <div className="">
            <button
              onClick={handleEditors}
              className={`hover:bg-teal-100 relative w-56 flex items-center text-sm py-3 px-4 text-gray-600 ${
                window.location.pathname === `/admin/blogs/${id}/editors`
                  ? "bg-teal-100 "
                  : ""
              }`}
            >
              <div className="mr-1">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>

              <div className="">編集者管理</div>
            </button>
          </div>
        </div>

        <div className="mt-96">
          <div className="mt-24">
            {/* flexかなんかで記事一覧からタイトルのかたまりと設定〜ヘルプのかたまりで分けた方がいいかも */}
            <button
              onClick={handleSetting}
              className={`hover:bg-teal-100 relative w-56 flex items-center text-sm py-3 px-4 text-gray-600 ${
                window.location.pathname === `/admin/blogs/${id}/config`
                  ? "bg-teal-100 "
                  : ""
              }`}
            >
              <div className="mr-1">
                <svg
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>

              <div className="">設定</div>
            </button>
          </div>

          <div className="">
            <div className="relative flex items-center w-56 px-4 py-3 text-sm text-gray-600 cursor-not-allowed hover:bg-teal-100">
              <div className="mr-1">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>ヘルプ</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
