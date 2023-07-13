import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PageContext, SetPageContext } from "../../context/PaginationContext";

export function PaginationCard() {
  const currentPage = useContext(PageContext);

  const setPage = useContext(SetPageContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        siblingCount={0}
        size="small"
        count={50}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
