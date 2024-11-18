import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./alert/alertSlice";
import userReducer from "./user/userSlice";
import langReducer from "./lang/langSlice";
import themeReducer from "./theme/themeSlice";
const rootReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
  lang: langReducer,
  theme: themeReducer,
});
export default rootReducer;
