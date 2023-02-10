import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../button/Button";

const QUERY_PARAM_NAME = "_p";

type Props = {
  onClickFetchBlog?: () => void;
  setNextPageNum?: (pageNum: number) => void;
  pageNum?: number;
  totalPageNum?: number;
};

export const Pagination: React.FC<Props> = ({
  onClickFetchBlog,
  setNextPageNum,
  pageNum,
  totalPageNum,
}) => {
  // TODO: クエリーパラメータを使ってページネーションを実装する
  // const search = useLocation().search;
  // const navigate = useNavigate();
  // const urlPageNumber = new URLSearchParams(search).get(QUERY_PARAM_NAME);
  // const [currentPage, setCurrentPage] = React.useState(
  //   Number(urlPageNumber) || 1
  // );
  // ここでurlのクエリパラメータを監視して、変更があったらcurrentPageを変更する
  // useEffect(() => {
  //   setCurrentPage(Number(urlPageNumber) || 1);
  // }, [urlPageNumber]);
  const handleOnClick = () => {
    onClickFetchBlog && onClickFetchBlog();
    pageNum && setNextPageNum && setNextPageNum(pageNum + 1);
    // navigate(`?${QUERY_PARAM_NAME}=${currentPage + 1}`);
    // setCurrentPage((prev) => prev + 1);
  };

  if (totalPageNum && pageNum) {
    return totalPageNum <= pageNum ? (
      <> </>
    ) : (
      <Button handleOnClick={handleOnClick}>さらに読み込む</Button>
    );
  } else {
    return <></>;
  }
};
