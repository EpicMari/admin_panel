import React from "react";
import { Button, Modal as ModalMui } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrders, toggleModalOpen } from "../../../redux/actions";
import utilsReducer from "../../../redux/reducers/utilsReducer";

const Modal = ({ numSelected }) => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(
    ({ utilsReducer }) => utilsReducer.isOpenModal
  );
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <ModalMui
      open={isOpenModal}
      onClose={() => dispatch(toggleModalOpen())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button
          color="error"
          variant="contained"
          onClick={() => dispatch(deleteOrders(numSelected))}
        >
          Delete
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => dispatch(toggleModalOpen())}
        >
          Cancel
        </Button>
      </Box>
    </ModalMui>
  );
};

export default Modal;
