/* eslint-disable no-param-reassign */
const INITIAL_STATE = { modal: "Close" };

export default function ToggleModal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN":
      state.modal = "Open";
      return state;
    case "CLOSE":
      state.modal = "Close";
      return state;
    default:
      return state;
  }
}
