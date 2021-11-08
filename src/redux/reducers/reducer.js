import { actionsTypes } from "../actions/actionsTypes";

const initialState = { orders: [], currentUser: null };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.LOG_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case actionsTypes.SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    default:
      return state;
  }
};

export default reducer;
