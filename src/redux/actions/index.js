import { actionsTypes } from "./actionsTypes";

export const logUser = (user) => ({
  type: actionsTypes.LOG_USER,
  payload: user,
});

export const setOrders = (orders) => ({
  type: actionsTypes.SET_ORDERS,
  payload: orders,
});

export const deleteOrders = (ordersIds) => ({
  type: actionsTypes.DELETE_ORDERS,
  payload: ordersIds,
});

export const toggleModalOpen = () => ({
  type: actionsTypes.TOGGLE_MODAL_OPEN,
});
