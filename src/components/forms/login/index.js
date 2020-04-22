import React from "react";
import { MdVpnKey, MdPerson } from "react-icons/md";
import { useDispatch } from "react-redux";
import Form from "./styles";
import SwitchInput from "../../switch";
import ButtonTheme from "../../buttons";

export default function LoginForm() {
  const FormDispatch = useDispatch();
  const ModalDispatch = useDispatch();

  const ChangeForm = (event) => {
    event.preventDefault();
    FormDispatch({ type: "SIGNIN" });
  };

  const ToggleModal = (event) => {
    event.preventDefault();
    ModalDispatch({ type: "OPEN" });
  };
  return (
    <Form>
      <em>
        <p>Acesso ao sistema</p>
        <a href="/" onClick={ChangeForm}>
          Não tem cadastro?
        </a>
      </em>
      <h1>Log in</h1>
      <div>
        <MdPerson />
        <input
          type="text"
          autoComplete="username"
          placeholder="Nome de usuário"
        />
      </div>
      <div>
        <MdVpnKey />
        <input type="password" placeholder="Senha" />
      </div>
      <span>
        <SwitchInput text="Lembrar?" color="var(--color-orange)" />
        <a href="/" onClick={ToggleModal}>
          Esqueceu sua senha?
        </a>
      </span>
      <ButtonTheme type="submit" text="Entrar" />
    </Form>
  );
}
