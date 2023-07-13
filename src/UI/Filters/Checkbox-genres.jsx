import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { getGenre } from "../../response/get-genre";
import { FilterDispatchContext } from "../../context/FilterContext";
import { ACTION_TYPE } from "../../context/data";

export function CheckBoxGenres() {
  const dispatch = useContext(FilterDispatchContext);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGenre();
      setGenre(data);
    };
    fetchData();
  }, []);

  const handleChange = (event, genres) => {
    dispatch({
      type: ACTION_TYPE.addGenre,
      genres,
    });
  };

  return genre ? (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={genre}
      onChange={handleChange}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Genres" placeholder="Select genres" />
      )}
      sx={{ width: "100%", paddingTop: 3 }}
    />
  ) : (
    <TextField>Loading...</TextField>
  );
}
