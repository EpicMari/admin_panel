import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  modalConfig: { isModalOpen: false, modalType: "" },
  coordinates: { lat: 50.25, lot: 19 },
  weatherData: null,
};

const utilsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.OPEN_MODAL:
      return {
        ...state,
        modalConfig: {
          isModalOpen: true,
          modalType: payload,
        },
      };

    case actionsTypes.CLOSE_MODAL:
      return {
        ...state,
        modalConfig: {
          ...state.modalConfig,
          isModalOpen: false,
        },
      };

    case actionsTypes.SET_COORDINATES:
      return {
        ...state,
        coordinates: payload,
      };

    case actionsTypes.SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: payload,
      };
    default:
      return state;
  }
};

export default utilsReducer;
