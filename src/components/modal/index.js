import React from "react";
import { useDispatch } from "react-redux";
import { ModalContainer, ModalContent } from "./styles";
import ButtonTheme from "../buttons";

export default function Modal() {
  const ModalDispatch = useDispatch();

  const ToggleModal = (event) => {
    event.preventDefault();
    ModalDispatch({ type: "CLOSE" });
  };

  return (
    <ModalContainer>
      <ModalContent>
        <div>
          <h2>Recuperação de senha:</h2>
          <i
            onClick={ToggleModal}
            tabIndex={0}
            onKeyUp={() => {}}
            role="button"
          >
            &times;
          </i>
          <hr />
        </div>
        <div>
          <figure>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/forgot-key.svg`}
              alt="Forgot key"
            />
          </figure>
          <div>
            <p>Fique tranquilo!</p>
            <p>
              Informe o seu
              <b> email registrado</b>
              {" e te ajudaremos com isso! "}
            </p>
            <input
              type="email"
              name="email"
              id="forgotpass"
              required
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <hr />
          <ButtonTheme type="submit" text="Enviar" />
        </div>
      </ModalContent>
    </ModalContainer>
  );
}
