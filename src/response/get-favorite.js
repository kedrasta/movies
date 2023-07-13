import { OPTIONS, URL_MOVIES } from "./data";

export async function getFavorite() {
  try {
    const data = await fetch(URL_MOVIES.FAVORITE, OPTIONS);
    return await data.json();
  } catch (err) {
    console.error(err);
  }
}
