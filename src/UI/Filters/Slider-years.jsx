import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { FilterDispatchContext } from "../../context/FilterContext";
import { ACTION_TYPE, defaultValueFilter } from "../../context/data";

export function SliderYears() {
  const [value, setValue] = useState(defaultValueFilter.year);

  const dispatch = useContext(FilterDispatchContext);

  const handleChange = (event, year) => {
    setValue(year);
    dispatch({
      type: ACTION_TYPE.addYear,
      year,
    });
  };

  return (
    <Box sx={{ width: "100%", paddingTop: 3 }}>
      <Typography>Relase year:</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        getAriaValueText={(value) => `${value}°C`}
        valueLabelDisplay="on"
        min={1960}
        max={2024}
      />
    </Box>
  );
}
