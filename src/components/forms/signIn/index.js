import React from "react";
import { useDispatch } from "react-redux";
import { ButtonTheme } from "../../buttons";
import { Input } from "../../inputs";
import Form from "./styles";

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
      <label>
        Nome de usuário:
        <Input
          type="text"
          autoComplete="username"
          placeholder="Nome de usuário"
          width="70%"
          margin="0 auto"
        />
      </label>
      <label>
        Email:
        <Input
          type="email"
          placeholder="O seu melhor email"
          width="70%"
          margin="0 auto"
        />
      </label>
      <div>
        <label>
          Senha:
          <Input
            type="password"
            placeholder="Senha secreta"
            width="90%"
            margin="0 auto"
          />
        </label>
        <label>
          Repita sua senha:
          <Input
            type="password"
            placeholder="Senha"
            width="90%"
            margin="0 auto"
          />
        </label>
      </div>
      <ButtonTheme type="submit">Enviar</ButtonTheme>
    </Form>
  );
}
