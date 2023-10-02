import * as s from "./styles";
import { PaginationProps } from "./types";

export const Pagination = (props: PaginationProps) => {
  const pageCount = Math.ceil(props.itemsCount / props.pageSize);

  const isPrevDisabled = props.page === 0;
  const isNextDisabled = props.page === pageCount - 1;

  const handleButtonClick = (page: number) => {
    props.onPageChange(page);
  };

  return (
    <>
      {pageCount > 1 && (
        <s.Container>
          <s.Button
            disabled={isPrevDisabled}
            onClick={() => handleButtonClick(props.page - 1)}
          >
            {"< Prev"}
          </s.Button>
          <s.Button
            disabled={isNextDisabled}
            onClick={() => handleButtonClick(props.page + 1)}
          >
            {"Next >"}
          </s.Button>
        </s.Container>
      )}
    </>
  );
};
