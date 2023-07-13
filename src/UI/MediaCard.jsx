import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getFilmCard } from "../response/get-film-card";
import { FilterContext } from "../context/FilterContext";
import { PageContext } from "../context/PaginationContext";
import { URL_MOVIES } from "../response/data";
import { IconButton } from "@mui/material";
import { StarBorder, StarRate } from "@mui/icons-material";
import { changeFavMovies } from "../response/add-favorite";
import { getFavorite } from "../response/get-favorite";
import { MovieSearchContext } from "../context/MovieSearchContext";
import { searchMovies } from "../response/search-movies";

export default function MediaCard() {
  const [movies, setMovies] = useState([]);

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const filters = useContext(FilterContext);

  const currentPage = useContext(PageContext);

  const searhMovie = useContext(MovieSearchContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilmCard(filters.sort, currentPage);
      if (data) setMovies(data.results);
    };
    fetchData();
  }, [filters.sort, currentPage, searhMovie]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFavorite();
      setFavoriteMovies(data.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searhMovie) {
      const fetchData = async () => {
        const data = await searchMovies(searhMovie);
        setMovies(data.results);
      };
      fetchData();
    }
  }, [searhMovie]);

  return movies?.map((movie) => {
    const isFavorite = favoriteMovies.some(
      (favoriteMovie) => favoriteMovie.id === movie.id
    );
    return (
      <Card
        key={movie.id}
        sx={{
          width: 200,
          alignItems: "center",
          margin: 1,
          padding: 2,
        }}
      >
        <CardMedia
          sx={{ height: 150, padding: 10 }}
          image={`${URL_MOVIES.IMAGE}${
            movie.poster_path || movie.backdrop_path
          }`}
        />
        <CardContent>
          <Link to={`/film/${movie.id}`}>
            <Typography gutterBottom variant="p" fontSize={12} component="div">
              {movie.title}
            </Typography>
          </Link>
        </CardContent>

        <CardActions>
          <Typography variant="body2" color="text.secondary">
            Rating: {movie.vote_average}
          </Typography>
          {!isFavorite ? (
            <IconButton
              onClick={() => changeFavMovies(movie.id, true)}
              aria-label="StarBorder"
            >
              <StarBorder />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => changeFavMovies(movie.id, false)}
              aria-label="Star"
            >
              <StarRate />
            </IconButton>
          )}
        </CardActions>
      </Card>
    );
  });
}
