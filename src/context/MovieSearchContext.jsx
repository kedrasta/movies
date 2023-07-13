import { createContext, useState } from "react";

export const MovieSearchContext = createContext(null);
export const SetMovieSearchContext = createContext(null);

export function MovieSearhProvider({ children }) {
  const [search, setSearch] = useState(null);
  return (
    <MovieSearchContext.Provider value={search}>
      <SetMovieSearchContext.Provider value={setSearch}>
        {children}
      </SetMovieSearchContext.Provider>
    </MovieSearchContext.Provider>
  );
}
