import React from "react";

export const ArticleLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-32">
      <div className="flex justify-center">
        <div className="w-5 h-5 border-4 border-green-800 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};
