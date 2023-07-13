import { OPTIONS, LANGUAGE_API, URL_MOVIES } from "./data";

export async function getFilmCard(sort, page) {
  try {
    const data = await fetch(
      `${URL_MOVIES.MOVIE}${sort}?${LANGUAGE_API.english}&page=${page}`,
      OPTIONS
    );
    return await data.json();
  } catch (err) {
    console.error(err);
  }
}
