import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Main, Section, Figure } from "./styles";
import Form from "../../components/forms";
import Modal from "../../components/modal";

export default function Login() {
  const changeForm = useSelector((state) => state.ChangeForm.form);
  const toggleModal = useSelector((state) => state.ToggleModal.modal);
  const [mode, setMode] = useState(null);
  const [renderModal, setRenderModal] = useState(null);

  useEffect(() => {
    setMode(changeForm);
  }, [changeForm]);

  useEffect(() => {
    if (toggleModal === "Open") {
      setRenderModal(<Modal />);
    } else {
      setRenderModal(null);
    }
  }, [toggleModal]);

  return (
    <Main>
      <Section>
        <Figure mode={mode}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/login.png`}
            alt="Task organization"
          />
        </Figure>
        <Form />
      </Section>
      {renderModal}
    </Main>
  );
}
