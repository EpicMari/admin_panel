import React from "react";
import { Button, Modal as ModalMui } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/actions";
import { listTypesModal } from "../../../utils/listTypes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Modal = () => {
  const dispatch = useDispatch();
  const modalConfig = useSelector(
    ({ utilsReducer }) => utilsReducer.modalConfig
  );
  return (
    <ModalMui
      open={modalConfig.isModalOpen}
      onClose={() => dispatch(closeModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {modalConfig.modalType === listTypesModal.edit ? (
          <>
            <Button color="error" variant="contained">
              cancel
            </Button>
            <Button color="primary" variant="contained">
              save
            </Button>
          </>
        ) : modalConfig.modalType === listTypesModal.delete ? (
          <>
            <h2>Sure to delete?</h2>
            <Button color="error" variant="contained">
              no
            </Button>
            <Button color="primary" variant="contained">
              yes
            </Button>
          </>
        ) : (
          <p>show products</p>
        )}
      </Box>
    </ModalMui>
  );
};

export default Modal;
