import { createContext, useState } from "react";

export const PageContext = createContext(null);
export const SetPageContext = createContext(null);

export function PaginationProvider({ children }) {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider value={page}>
      <SetPageContext.Provider value={setPage}>
        {children}
      </SetPageContext.Provider>
    </PageContext.Provider>
  );
}
