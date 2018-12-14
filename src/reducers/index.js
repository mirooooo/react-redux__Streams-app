import { combineReducers } from "redux";
// instal redux-form and import reducer
import { reducer as formReducer } from "redux-form";
//=======================================
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
