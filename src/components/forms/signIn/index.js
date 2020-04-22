import React from "react";
import { useDispatch } from "react-redux";
import Form from "./styles";
import ButtonTheme from "../../buttons";

export default function LoginForm() {
  const formDispatch = useDispatch();
  const ChangeForm = (event) => {
    event.preventDefault();
    formDispatch({ type: "LOGIN" });
  };
  return (
    <Form>
      <em>
        <p>Novo cadastro</p>
        <a href="/" onClick={ChangeForm}>
          Já tem cadastro?
        </a>
      </em>
      <h1>Sign in</h1>
      <label htmlFor="username">
        Nome de usuário:
        <input
          type="text"
          autoComplete="username"
          placeholder="Nome de usuário"
          id="username"
        />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" id="email" placeholder="O seu melhor email" />
      </label>
      <div>
        <label htmlFor="password">
          Senha:
          <input type="password" id="password" placeholder="Senha secreta" />
        </label>
        <label htmlFor="repeat-password">
          Repita sua senha:
          <input type="password" id="repeat-password" placeholder="Senha" />
        </label>
      </div>
      <ButtonTheme type="submit" text="Enviar"/>
    </Form>
  );
}
