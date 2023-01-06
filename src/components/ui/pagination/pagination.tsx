import React from "react";

type Props = {
  onClickFetchBlog?: () => void;
  setNextPageNum?: (pageNum: number) => void;
  pageNum?: number;
};

export const Pagination: React.FC<Props> = ({
  onClickFetchBlog,
  setNextPageNum,
  pageNum,
}) => {
  const handleOnClick = () => {
    onClickFetchBlog && onClickFetchBlog();
    pageNum && setNextPageNum && setNextPageNum(pageNum + 1);
  };
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className="px-4 py-2 text-sm font-medium text-white rounded bg-emerald-700"
    >
      さらに読み込む
    </button>
  );
};
