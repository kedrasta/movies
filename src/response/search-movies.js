import { LANGUAGE_API, OPTIONS, URL_MOVIES } from "./data";

export async function searchMovies(text) {
  try {
    const data = await fetch(
      `${URL_MOVIES.SEARCH}?query=${text}%3D&include_adult=false&${LANGUAGE_API.english}&page=1`,
      OPTIONS
    );
    return await data.json();
  } catch (err) {
    console.error(err);
  }
}
