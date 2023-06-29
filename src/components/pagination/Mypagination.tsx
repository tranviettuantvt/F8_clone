import { Pagination } from "antd";
import React, { useState, memo } from "react";

const MyPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return <Pagination defaultCurrent={3} total={100} />;
};
export default memo(MyPagination);
