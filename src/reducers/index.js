import { combineReducers } from "redux";
import AuthReducer from "./authReducer";

const appReducer = combineReducers({
  auth: AuthReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
