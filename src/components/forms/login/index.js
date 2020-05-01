import React, { useState } from "react";
import { MdVpnKey, MdPerson } from "react-icons/md";
import { useDispatch } from "react-redux";
import Form from "./styles";
import { Input, Switch } from "../../inputs";
import { ButtonTheme } from "../../buttons";
import TransitionPage from "../../transition";

export default function LoginForm() {
  const FormDispatch = useDispatch();
  const ModalDispatch = useDispatch();
  const [transition, setTrantision] = useState(false);

  const ChangeForm = (event) => {
    event.preventDefault();
    FormDispatch({ type: "SIGN_IN" });
  };

  const ToggleModal = (event) => {
    event.preventDefault();
    ModalDispatch({ type: "OPEN_MODAL" });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    setTrantision(true);
  };

  return (
    <>
      <Form onSubmit={HandleSubmit}>
        <em>
          <p>Acesso ao sistema</p>
          <a href="/" onClick={ChangeForm}>
            Não tem cadastro?
          </a>
        </em>
        <h1>Log in</h1>
        <div>
          <MdPerson />
          <Input
            type="text"
            autoComplete="username"
            placeholder="Nome de usuário"
            width="70%"
          />
        </div>
        <div>
          <MdVpnKey />
          <Input type="password" placeholder="Senha" width="70%" />
        </div>
        <span>
          <Switch text="Lembrar?" color="var(--color-orange)" />
          <a href="/" onClick={ToggleModal}>
            Esqueceu sua senha?
          </a>
        </span>
        <ButtonTheme type="submit">Entrar</ButtonTheme>
      </Form>
      {transition === true ? (
        <TransitionPage redirect="/tasks" text="Tarefas" />
      ) : null}
    </>
  );
}
