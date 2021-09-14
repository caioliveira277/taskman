import React from "react";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import { Main, Section, Figure, FormForgotPass } from "./styles";
import { Form } from "../../components/forms";
import Modal from "../../components/modal";
import { ButtonTheme } from "../../components/buttons";
import { Input } from "../../components/inputs";
import animation from "../../components/animations/lottie/worked.json";

export default function Login() {
  const changeForm = useSelector((state) => state.ChangeForm.form);
  const toggleModal = useSelector((state) => state.Toggle.modal);
  return (
    <Main>
      <Section>
        <Figure mode={changeForm}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/login.png`}
            alt="Task"
          />
        </Figure>
        <Form />
      </Section>
      {toggleModal === "Open" ? (
        <Modal title="Recuperação de senha:">
          <FormForgotPass>
            <div>
              <figure>
                <Lottie
                  options={{
                    animationData: animation,
                  }}
                />
              </figure>
              <span>
                <p>Fique tranquilo!</p>
                <p>
                  Informe o seu
                  <b> email registrado</b>
                  {" e te ajudaremos com isso! "}
                </p>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  margin="10px 0"
                />
              </span>
            </div>
            <hr />
            <div>
              <ButtonTheme type="submit">Enviar</ButtonTheme>
            </div>
          </FormForgotPass>
        </Modal>
      ) : null}
    </Main>
  );
}
