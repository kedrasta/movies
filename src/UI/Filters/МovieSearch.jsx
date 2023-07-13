import { TextField } from "@mui/material";
import { useContext } from "react";
import { SetMovieSearchContext } from "../../context/MovieSearchContext";

export function MovieSearh() {
  const setSearchMovie = useContext(SetMovieSearchContext);

  function handleChange(e) {
    setSearchMovie(e);
  }
  return (
    <TextField
      onChange={(e) => handleChange(e.target.value)}
      id="outlined-basic"
      label="Movie title"
      variant="outlined"
    />
  );
}
