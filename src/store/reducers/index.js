import { combineReducers } from "redux";
import ChangeForm from "./changeForm.reducer";
import Toggle from "./toggle.reducer";

export const reducers = combineReducers({
  ChangeForm,
  Toggle,
});
