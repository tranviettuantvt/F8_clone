import { Pagination } from "antd";
import React, { memo } from "react";

interface MyPaginationProps {
  currentPage?: number;
  totalPages?: number;
}

const MyPagination: React.FC<MyPaginationProps> = ({
  currentPage,
  totalPages,
}) => {

  return (
    <Pagination  defaultPageSize={5} defaultCurrent={currentPage} total={totalPages} />
  );
};

export default memo(MyPagination);
