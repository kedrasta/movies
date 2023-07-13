import { ErrorModal } from "../UI/ErrorModal";
import { TOKEN } from "./data";

export async function changeFavMovies(id, action) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: id,
      favorite: action,
    }),
  };
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/account/20037229/favorite",
      options
    );

    return await data.json();
  } catch (err) {
    ErrorModal({ err }, true);
  }
}
