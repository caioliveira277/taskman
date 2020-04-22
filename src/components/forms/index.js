import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormLogin from "./login";
import FormSignIn from "./signIn";

export default function Form() {
  const changeForm = useSelector((state) => state.ChangeForm.form);
  const [renderForm, setRenderForm] = useState(<FormLogin />);

  useEffect(() => {
    if (changeForm === "Login") {
      setRenderForm(<FormLogin />);
    } else {
      setRenderForm(<FormSignIn />);
    }
  }, [changeForm]);
  return renderForm;
}
