import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmDetails } from "../response/get-film-details";
import { FilmDetailsCard } from "./FilmDetailsCard";

// eslint-disable-next-line import/prefer-default-export
export function FilmDetails() {
  const { moiveId } = useParams();

  const [movies, setMovies] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilmDetails(moiveId);
      setMovies(data);
    };
    fetchData();
  }, [moiveId]);

  return (
    <Box>
      <FilmDetailsCard {...movies} />;
    </Box>
  );
}
