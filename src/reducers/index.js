import { combineReducers } from "redux";
// instal redux-form and import reducer
import { reducer as formReducer } from "redux-form";
//=======================================
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
