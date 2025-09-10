import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Fab,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddPost() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className="fixed bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0"
        onClick={handleOpen}
      >
        <Add />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="md:w-[600px] rounded-3xl">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="mb-5 text-center"
            color={"text.primary"}
          >
            Add New post
          </Typography>
          <TextField
            id="outlined-multiline-static"
            label="Post"
            multiline
            rows={9}
            placeholder="text...."
            className="w-full mb-5"
          />
          <Box className="text-center">
            <Button variant="contained" onClick={handleClose}>
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
