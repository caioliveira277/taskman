const INITIAL_STATE = { form: "Login" };

export default function ChangeForm(state = INITIAL_STATE, action) {
  let State;
  switch (action.type) {
    case "LOGIN":
      State = { ...state, form: "Login" };
      break;
    case "SIGN_IN":
      State = { ...state, form: "SingIn" };
      break;
    default:
      return state;
  }
  return State;
}
