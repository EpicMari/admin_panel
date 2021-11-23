import { combineReducers } from "redux";
import utilsReducer from "./utilsReducer";
import ordersReducer from "./ordersReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  utilsReducer,
  ordersReducer,
  userReducer,
});

export default rootReducer;
