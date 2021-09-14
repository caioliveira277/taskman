import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ModalContent } from "./styles";
import Container from "../container";

export default function Modal({ title, children, onAnimationEnd }) {
  const ModalDispatch = useDispatch();

  const ToggleModal = (event) => {
    event.preventDefault();
    ModalDispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <Container zindex={10}>
      <ModalContent onAnimationEnd={onAnimationEnd}>
        <div>
          <h2>{title}</h2>
          <i
            onClick={ToggleModal}
            tabIndex={0}
            onKeyPress={ToggleModal}
            role="button"
          >
            &times;
          </i>
        </div>
        <hr />
        <div>{children}</div>
      </ModalContent>
    </Container>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  onAnimationEnd: PropTypes.func,
};
Modal.defaultProps = {
  onAnimationEnd: () => null,
};
