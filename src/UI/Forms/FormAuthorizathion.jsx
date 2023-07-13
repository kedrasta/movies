import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  UserAuthContext,
  UserAuthDispatchContext,
} from "../../context/UserRegConext";
import { USER_TYPE } from "../../context/data";

export function FormAuth() {
  const userAuth = useContext(UserAuthContext);
  const dispatch = useContext(UserAuthDispatchContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch({
      type: USER_TYPE.patchModalAuth,
      ModalAuth: false,
    });
  };

  function setToken(token) {
    JSON.stringify(localStorage.setItem("token", JSON.stringify(token)));
  }

  return (
    <>
      <Dialog open={userAuth.ModalAuth}>
        <DialogTitle>ENTER TOKEN</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter token"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setToken(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChange}>ENTER</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
