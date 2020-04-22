import { combineReducers } from "redux";
import ChangeForm from "./changeForm.reducer";
import ToggleModal from "./toggleModal.reducer";

export const reducers = combineReducers({
  ChangeForm,
  ToggleModal,
});
