import { actionsTypes } from "./actionsTypes";

export const setUser = (user) => ({
  type: actionsTypes.SET_USER,
  payload: user,
});

export const setOrders = (orders) => ({
  type: actionsTypes.SET_ORDERS,
  payload: orders,
});

export const selectedOrders = (orders) => ({
  type: actionsTypes.SELECTED_ORDERS,
  payload: orders,
});

export const deleteOrders = (ordersIds) => ({
  type: actionsTypes.DELETE_ORDERS,
  payload: ordersIds,
});

export const openModal = (modalType) => ({
  type: actionsTypes.OPEN_MODAL,
  payload: modalType,
});

export const closeModal = () => ({
  type: actionsTypes.CLOSE_MODAL,
});
