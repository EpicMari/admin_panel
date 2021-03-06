import { actionsTypes } from '../actions/actionsTypes';

const initialState = {
  orders: [],
  selected: [],
  showProductsFromOrder: null,
  deletedOrders: [],
  showProductsFromDeletedOrder: null,
};

const ordersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };
    case actionsTypes.SELECTED:
      return {
        ...state,
        selected: payload,
      };
    case actionsTypes.SHOW_PRODUCTS_FROM_ORDER:
      return {
        ...state,
        showProductsFromOrder: state.orders.find((order) => payload.includes(order.docId)),
      };
    case actionsTypes.DELETE_ORDERS:
      return {
        ...state,
        orders: state.orders.filter((order) => !payload.includes(order.docId)),
      };
    case actionsTypes.SET_DELETED_ORDERS:
      return {
        ...state,
        deletedOrders: payload,
      };
    case actionsTypes.SHOW_PRODUCTS_FROM_DELETED_ORDER:
      return {
        ...state,
        showProductsFromDeletedOrder: state.deletedOrders.find((order) =>
          payload.includes(order.docId),
        ),
      };
    default:
      return state;
  }
};

export default ordersReducer;
