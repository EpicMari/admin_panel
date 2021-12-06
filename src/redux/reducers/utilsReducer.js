import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  modalConfig: { isModalOpen: false, modalType: "" },
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

    default:
      return state;
  }
};

export default utilsReducer;
