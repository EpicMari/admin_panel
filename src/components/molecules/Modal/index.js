import React from "react";
import { Button, Modal as ModalMui } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, setSelected } from "../../../redux/actions";
import { listTypesModal } from "../../../utils/listTypes";
import {
  deleteOrderFromFirestore,
  editOrderFromFirestore,
} from "../../../firebase/firestoreUtils";
import EnhancedTable from "../../organisms/EnhancedTable";
import { productsOrderHeadCells } from "../../../utils/headCells";
import ChangeOrder from "../ChangeOrder";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  height: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Modal = () => {
  const dispatch = useDispatch();
  const modalConfig = useSelector(
    ({ utilsReducer }) => utilsReducer.modalConfig
  );
  const selected = useSelector(({ ordersReducer }) => ordersReducer.selected);
  const productsFromOrder = useSelector(
    ({ ordersReducer }) => ordersReducer.showProductsFromOrder
  );

  let tableArray = [];
  if (productsFromOrder) {
    const mappedProductsFromOrder = productsFromOrder.products.map(
      ({
        quantity,
        price,
        image,
        category,
        name,
        inCartQuantity,
        description,
        id,
      }) => {
        return { id, name, price, inCartQuantity, category };
      }
    );
    tableArray = mappedProductsFromOrder;
  }

  return (
    <ModalMui
      open={modalConfig.isModalOpen}
      onClose={() => dispatch(closeModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {modalConfig.modalType === listTypesModal.edit ? (
          <ChangeOrder
            row={productsFromOrder}
            closeModal={() => dispatch(closeModal())}
            editOrder={(orderId, status, totalPrice, createdAt) =>
              editOrderFromFirestore(orderId, status, totalPrice, createdAt)
            }
          />
        ) : modalConfig.modalType === listTypesModal.delete ? (
          <>
            <h2>Sure to delete?</h2>
            <Button
              onClick={() => dispatch(closeModal())}
              color="error"
              variant="contained"
            >
              no
            </Button>
            <Button
              onClick={() => {
                deleteOrderFromFirestore(selected);
                dispatch(closeModal());
              }}
              color="primary"
              variant="contained"
            >
              yes
            </Button>
          </>
        ) : (
          <EnhancedTable
            headCells={productsOrderHeadCells}
            rows={tableArray}
            selected={selected}
            setSelected={(orders) => dispatch(setSelected(orders))}
          />
        )}
      </Box>
    </ModalMui>
  );
};

export default Modal;
