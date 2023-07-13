import { Filters } from "./UI/Filters/index";
import React, { useContext, useEffect } from "react";
import MediaCard from "./UI/MediaCard";
import { Box } from "@mui/system";
import { FilterProvider } from "./context/FilterContext";
import { PaginationProvider } from "./context/PaginationContext";
import { TopBar } from "./UI/Appbar";
import { FormAuth } from "./UI/Forms/FormAuthorizathion";
import { FormReg } from "./UI/Forms/FormRegistration";
import {
  UserAuthContext,
  UserAuthDispatchContext,
} from "./context/UserRegConext";
import { USER_TYPE } from "./context/data";
import { MovieSearhProvider } from "./context/MovieSearchContext";
import { ErrorModal } from "./UI/ErrorModal";

function App() {
  const userAuth = useContext(UserAuthContext);
  const dispatch = useContext(UserAuthDispatchContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: USER_TYPE.patchReg,
        userReg: true,
      });
    }
  }, [dispatch, userAuth]);

  return (
    <>
      <TopBar />
      <FormAuth />
      <FormReg />
      <ErrorModal />
      {userAuth.userReg && (
        <MovieSearhProvider>
          <PaginationProvider>
            <FilterProvider>
              <Box sx={{ display: "flex" }}>
                <Filters />
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <MediaCard />
                </Box>
              </Box>
            </FilterProvider>
          </PaginationProvider>
        </MovieSearhProvider>
      )}
    </>
  );
}

export default App;
