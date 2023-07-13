import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PaginationCard } from "./PaginationCard";
import { CheckBoxGenres } from "./Checkbox-genres";
import { SelectSort } from "./Select-sort";
import { SliderYears } from "./Slider-years";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { FilterDispatchContext } from "../../context/FilterContext";
import { ACTION_TYPE } from "../../context/data";
import { MovieSearh } from "./МovieSearch";

export function Filters() {
  const dispatch = useContext(FilterDispatchContext);

  const handleChange = () => {
    dispatch({
      type: ACTION_TYPE.defaultValue,
    });
  };

  return (
    <>
      <Box
        sx={{
          border: 1,
          width: "17em",
          height: "100%",
          padding: 4,
          marginTop: 1,
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5">Filters</Typography>
          <IconButton onClick={handleChange} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
        <MovieSearh />
        <SelectSort />
        <SliderYears />
        <CheckBoxGenres />
        <PaginationCard />
      </Box>
    </>
  );
}
