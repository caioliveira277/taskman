const INITIAL_STATE = { modal: "Close", aside: "Close" };

export default function ToggleModal(state = INITIAL_STATE, action) {
  let State;
  switch (action.type) {
    case "OPEN_MODAL":
      State = { ...state, modal: "Open" };
      break;
    case "CLOSE_MODAL":
      State = { ...state, modal: "Close" };
      break;
    case "OPEN_ASIDE":
      State = { ...state, aside: "Open" };
      break;
    case "CLOSE_ASIDE":
      State = { ...state, aside: "Close" };
      break;
    default:
      return state;
  }
  return State;
}
