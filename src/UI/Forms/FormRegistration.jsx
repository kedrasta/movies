import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  UserAuthContext,
  UserAuthDispatchContext,
} from "../../context/UserRegConext";
import { USER_TYPE } from "../../context/data";

export function FormReg() {
  const userAuth = useContext(UserAuthContext);
  const dispatch = useContext(UserAuthDispatchContext);

  const handleChange = () => {
    dispatch({
      type: USER_TYPE.patchModalReg,
      ModalReg: false,
    });
    dispatch({
      type: USER_TYPE.patchModalAuth,
      ModalAuth: true,
    });
  };

  return (
    <>
      <Dialog open={userAuth.ModalReg}>
        <DialogTitle>GET TOKEN</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To access the movie site, get a token to your email
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChange}>ACCEPT</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
