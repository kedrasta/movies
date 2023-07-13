import { OPTIONS, LANGUAGE_API, URL_MOVIES } from "./data";

export async function getGenre() {
  try {
    const data = await fetch(
      `${URL_MOVIES.GENRE}${LANGUAGE_API.english}`,
      OPTIONS
    );
    const result = await data.json();
    return result.genres;
  } catch (err) {
    console.error(err);
  }
}
