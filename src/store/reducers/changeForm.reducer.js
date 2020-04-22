/* eslint-disable no-param-reassign */
const INITIAL_STATE = { form: "Login" };

export default function ChangeForm(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN":
      state.form = "Login";
      return state;
    case "SIGNIN":
      state.form = "SignIn";
      return state;
    default:
      return state;
  }
}
