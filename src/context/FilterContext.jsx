import { createContext, useReducer } from "react";
import { ACTION_TYPE, defaultValueFilter } from "./data";

export const FilterContext = createContext(null);
export const FilterDispatchContext = createContext(null);

export function FilterReducer(filter, action) {
  switch (action.type) {
    case ACTION_TYPE.addYear: {
      return {
        ...filter,
        year: action.year,
      };
    }
    case ACTION_TYPE.addSort: {
      return {
        ...filter,
        sort: action.sort,
      };
    }
    case ACTION_TYPE.addGenre: {
      return {
        ...filter,
        genres: action.genres,
      };
    }
    case ACTION_TYPE.defaultValue: {
      return {
        ...filter,
        year: [2000, 2010],
        sort: "top_rated",
        genres: null,
      };
    }
    default: {
      console.warn(`Необработанный action.type`);
      return { ...filter };
    }
  }
}

export function FilterProvider({ children }) {
  const [filter, dispatch] = useReducer(FilterReducer, defaultValueFilter);

  return (
    <FilterContext.Provider key={filter} value={filter}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  );
}
