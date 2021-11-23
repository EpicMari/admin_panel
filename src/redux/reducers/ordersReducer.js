import { actionsTypes } from "../actions/actionsTypes";

const initialState = { orders: [] };

const ordersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    // case actionsTypes.DELETE_ORDERS:
    //   return {
    //     ...state,
    //     orders: state.orders.filter((order) => !payload.includes(order.docId)),
    //   };

    default:
      return state;
  }
};

export default ordersReducer;
