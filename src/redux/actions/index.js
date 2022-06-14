import { actionsTypes } from "./actionsTypes";

export const setUser = (user) => ({
  type: actionsTypes.SET_USER,
  payload: user,
});

export const setOrders = (orders) => ({
  type: actionsTypes.SET_ORDERS,
  payload: orders,
});

export const setSelected = (orders) => ({
  type: actionsTypes.SELECTED,
  payload: orders,
});

export const deleteOrders = (ordersIds) => ({
  type: actionsTypes.DELETE_ORDERS,
  payload: ordersIds,
});

export const showProductsFromOrder = (orderId) => ({
  type: actionsTypes.SHOW_PRODUCTS_FROM_ORDER,
  payload: orderId,
});

export const openModal = (modalType) => ({
  type: actionsTypes.OPEN_MODAL,
  payload: modalType,
});

export const closeModal = () => ({
  type: actionsTypes.CLOSE_MODAL,
});

export const setCoordinates = (coordinates) => ({
  type: actionsTypes.SET_COORDINATES,
  payload: coordinates,
});

export const setWeatherData = (weatherData) => ({
  type: actionsTypes.SET_WEATHER_DATA,
  payload: weatherData,
});

export const setDeletedOrders = (orders) => ({
  type: actionsTypes.SET_DELETED_ORDERS,
  payload: orders,
});

export const showProductsFromDeletedOrder = (orderId) => ({
  type: actionsTypes.SHOW_PRODUCTS_FROM_DELETED_ORDER,
  payload: orderId,
});

export const setGoogleAcc = (acc) => ({
  type: actionsTypes.SET_GOOGLE_ACC,
  payload: acc,
});

export const setMessages = (messages) => ({
  type: actionsTypes.SET_MESSAGES,
  payload: messages,
});

export const setUndeadQuantity = (unread) => ({
  type: actionsTypes.SET_UNREAD_QUANTITY,
  payload: unread,
});

export const setMessagesLabel = (label) => ({
  type: actionsTypes.SET_MESSAGES_LABEL,
  payload: label,
});
