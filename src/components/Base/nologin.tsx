import React from "react";
import { Link } from "react-router-dom";

export const Nologin = () => {
  return (
    <>
      <div className="flex justify-between my-4 mx-3">
        <div>
          {/* 1 */}

          <div className="text-black w-28 h-10 text-3xl  font-medium not-italic flex-none order-none grow-0">
            Goths
          </div>
        </div>
        {/* 1 */}

        <div>
          {/* 2 */}

          <div className="flex w-40 flex-wrap items-stretch mb-2"></div>
          {/* 2 */}

          <div>
            {/* 3 */}

            <div className="flex justify-center items-center mr-3">
              <div className="mr-3 text-gray-500">
                <Link to="/authentication">ログイン</Link>
              </div>

              <div>
                <Link to="/register">
                  <button
                    type="button"
                    className="mx-3 bg-emerald-700 text-white text-sm py-2  px-4  font-medium rounded"
                  >
                    登録
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* 3 */}
        </div>
      </div>
    </>
  );
};
