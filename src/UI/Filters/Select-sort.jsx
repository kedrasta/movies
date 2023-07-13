import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FilterDispatchContext } from "../../context/FilterContext";
import { ACTION_TYPE, defaultValueFilter } from "../../context/data";

export function SelectSort() {
  const dispatch = useContext(FilterDispatchContext);

  const handleChange = (sort) => {
    dispatch({
      type: ACTION_TYPE.addSort,
      sort,
    });
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", paddingTop: 1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort</InputLabel>
        <Select
          onChange={(e) => handleChange(e.target.value)}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          defaultValue={defaultValueFilter.sort}
          autoWidth
          label="Sort"
        >
          <MenuItem value={"top_rated"}>Top rating</MenuItem>
          <MenuItem value={"popular"}>Popular</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
