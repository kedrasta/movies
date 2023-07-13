import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export function ErrorModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>GET TOKEN</DialogTitle>
        <DialogContent>
          <DialogContentText>123</DialogContentText>
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
          <Button>ACCEPT</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
