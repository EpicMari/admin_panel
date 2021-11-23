import { actionsTypes } from "../actions/actionsTypes";

const initialState = { isOpenModal: false };

const utilsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.TOGGLE_MODAL_OPEN:
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };

    default:
      return state;
  }
};

export default utilsReducer;
