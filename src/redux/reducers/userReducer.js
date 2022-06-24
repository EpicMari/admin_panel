import { actionsTypes } from '../actions/actionsTypes';

const initialState = { currentUser: null, googleAcc: null };

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case actionsTypes.SET_GOOGLE_ACC:
      return {
        ...state,
        googleAcc: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
