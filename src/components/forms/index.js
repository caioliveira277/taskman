import React from "react";
import { useSelector } from "react-redux";
import FormLogin from "./login";
import FormSignIn from "./signIn";
import NewGroup from "./newGroup";

export function Form() {
  const changeForm = useSelector((state) => state.ChangeForm.form);
  return changeForm === "Login" ? <FormLogin /> : <FormSignIn />;
}

export { NewGroup };
