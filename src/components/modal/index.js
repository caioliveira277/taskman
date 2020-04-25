import React from "react";
import { useDispatch } from "react-redux";
import { ModalContent } from "./styles";
import ModalContainer from "../container";
import ButtonTheme from "../buttons";
import { Input } from "../inputs";
import Lottie from "react-lottie";
import animation from "../animations/lottie/worked.json";

export default function Modal() {
  const ModalDispatch = useDispatch();

  const ToggleModal = (event) => {
    event.preventDefault();
    ModalDispatch({ type: "CLOSE" });
  };

  return (
    <ModalContainer zindex={3}>
      <ModalContent>
        <div>
          <h2>Recuperação de senha:</h2>
          <i
            onClick={ToggleModal}
            tabIndex={0}
            onKeyPress={ToggleModal}
            role="button"
          >
            &times;
          </i>
          <hr />
        </div>
        <div>
          <figure>
            <Lottie
              options={{
                animationData: animation,
              }}
            />
          </figure>
          <div>
            <p>Fique tranquilo!</p>
            <p>
              Informe o seu
              <b> email registrado</b>
              {" e te ajudaremos com isso! "}
            </p>
            <Input
              type="email"
              name="email"
              required={true}
              placeholder="Email"
              margin="10px 0"
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
