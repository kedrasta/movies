import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext } from "react";
import {
  UserAuthContext,
  UserAuthDispatchContext,
} from "../context/UserRegConext";
import { USER_TYPE } from "../context/data";

export function TopBar() {
  const dispatch = useContext(UserAuthDispatchContext);

  const userAuth = useContext(UserAuthContext);

  const handleChange = () => {
    dispatch({
      type: USER_TYPE.patchModalReg,
      ModalReg: true,
    });
  };

  function logOut() {
    localStorage.removeItem("token");
    dispatch({
      type: USER_TYPE.patchReg,
      userReg: false,
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies
          </Typography>
          {!userAuth.userReg ? (
            <Button onClick={handleChange} color="inherit">
              Login
            </Button>
          ) : (
            <Button onClick={logOut} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
