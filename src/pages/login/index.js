import React from "react";
import { useSelector } from "react-redux";
import { Main, Section, Figure } from "./styles";
import Form from "../../components/forms";
import Modal from "../../components/modal";

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
      {toggleModal === "Open" ? <Modal /> : null}
    </Main>
  );
}
