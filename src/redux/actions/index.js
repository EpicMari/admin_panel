import { actionsTypes } from "./actionsTypes";

export const logUser = (user) => ({
  type: actionsTypes.LOG_USER,
  payload: user,
});

export const setOrders = (orders) => ({
  type: actionsTypes.SET_ORDERS,
  payload: orders,
});
