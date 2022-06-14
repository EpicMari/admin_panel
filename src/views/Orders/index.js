import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EnhancedTable from "../../components/organisms/EnhancedTable";
import {
  openModal,
  setSelected,
  showProductsFromOrder,
} from "../../redux/actions";
import { ordersHeadCells } from "../../utils/headCells";
import { listTypesModal, listTypesTable } from "../../utils/listTypes";
import { StyledWrapper } from "./StyledOrders";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(({ ordersReducer }) => ordersReducer.orders);
  const selected = useSelector(({ ordersReducer }) => ordersReducer.selected);

  const mappedOrders = orders.map(
    ({
      docId,
      createdAt,
      email,
      name,
      products,
      status,
      totalPrice,
      userName,
    }) => {
      return {
        id: docId,
        name,
        products: products.length,
        email,
        totalPrice,
        createdAt,
        status,
      };
    }
  );
  return (
    <StyledWrapper>
      <EnhancedTable
        headCells={ordersHeadCells}
        rows={mappedOrders}
        listTypes={listTypesTable.orders}
        showProductsFromOrder={(id) => dispatch(showProductsFromOrder(id))}
        openModal={() => dispatch(openModal(listTypesModal.items))}
        openModalEdit={() => dispatch(openModal(listTypesModal.edit))}
        selected={selected}
        setSelected={(orders) => dispatch(setSelected(orders))}
      />
    </StyledWrapper>
  );
};

export default Orders;
