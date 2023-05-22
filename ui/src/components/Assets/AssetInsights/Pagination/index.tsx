import { useState } from "react";
import * as s from "./styles";
import { PaginationProps } from "./types";

const DEFAULT_PAGE_SIZE = 3;

export const Pagination = (props: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = props.pageSize || DEFAULT_PAGE_SIZE;
  const pageCount = Math.ceil(props.children.length / pageSize);

  if (pageCount === 1) {
    return <>{props.children}</>;
  }

  const pageStart = currentPage * pageSize;
  const pageEnd = pageStart + pageSize;

  console.log(props.children);
  console.log(currentPage, pageSize, pageCount);
  console.log(pageStart, pageEnd);

  const listItemElements = props.children.slice(pageStart, pageEnd);

  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage === pageCount - 1;

  const handleButtonClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {listItemElements}
      {pageCount > 1 && (
        <s.Container>
          <s.Button
            disabled={isPrevDisabled}
            onClick={() => handleButtonClick(currentPage - 1)}
          >
            {"< Prev"}
          </s.Button>
          <s.Button
            disabled={isNextDisabled}
            onClick={() => handleButtonClick(currentPage + 1)}
          >
            {"Next >"}
          </s.Button>
        </s.Container>
      )}
    </>
  );
};
