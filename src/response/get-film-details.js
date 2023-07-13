import { OPTIONS, LANGUAGE_API, URL_MOVIES } from "./data";

export async function getFilmDetails(id) {
  try {
    const data = await fetch(
      `${URL_MOVIES.MOVIE}${id}?${LANGUAGE_API.english}`,
      OPTIONS
    );
    return await data.json();
  } catch (err) {
    console.error(err);
  }
}
