import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EnhancedTable from '../../components/organisms/EnhancedTable';
import { openModal, setSelected, showProductsFromDeletedOrder } from '../../redux/actions';
import { ordersHeadCells } from '../../utils/headCells';
import { listTypesModal, listTypesTable } from '../../utils/listTypes';
import { StyledWrapper } from './StyledTrash';

const Trash = () => {
  const dispatch = useDispatch();
  const deletedOrders = useSelector(({ ordersReducer }) => ordersReducer.deletedOrders);
  const selected = useSelector(({ ordersReducer }) => ordersReducer.selected);

  const mappedDeletedOrders = deletedOrders.map(
    ({ docId, createdAt, email, name, products, status, totalPrice, userName }) => {
      return {
        id: docId,
        name,
        products: products.length,
        email,
        totalPrice,
        createdAt,
        status,
      };
    },
  );

  return (
    <StyledWrapper>
      <EnhancedTable
        headCells={ordersHeadCells}
        rows={mappedDeletedOrders}
        listTypes={listTypesTable.deletedOrders}
        showProductsFromOrder={(id) => dispatch(showProductsFromDeletedOrder(id))}
        openModal={() => dispatch(openModal(listTypesModal.itemsDeleted))}
        selected={selected}
        setSelected={(orders) => dispatch(setSelected(orders))}
      />
    </StyledWrapper>
  );
};

export default Trash;
