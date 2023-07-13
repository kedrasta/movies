export const TOKEN = JSON.parse(localStorage.getItem("token"));

export const URL_MOVIES = {
  MOVIE: "https://api.themoviedb.org/3/movie/",
  GENRE: "https://api.themoviedb.org/3/genre/movie/list?",
  IMAGE: "https://image.tmdb.org/t/p/w500",
  FAVORITE:
    "https://api.themoviedb.org/3/account/20037229/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
  SEARCH: "https://api.themoviedb.org/3/search/movie",
};

export const LANGUAGE_API = {
  english: "language=en",
};

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

/* "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDJjNDZkNjEyM2YyMjQ3M2ZiNGJlOGRlM2YzMzBjYiIsInN1YiI6IjY0OTE5YzUyNTU5ZDIyMDBmZjEyOTVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jVF-zyi6kMY_PxigqwK4d7RMqrmC8v4l9pAYnrnpUs0"; */
