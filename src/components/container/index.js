import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Container from "./styles";

/**
 * @description Container Component
 * @summary rendered directly in the 'body'
 *
 * @param   {String} [optional]    background = "#00000055"
 * @param   {String} [required]    zindex: z-index property css
 * @return {JSX} JSX
 *
 * @example
 *   <Container background="tomato" zindex="3"> ... </Container>
 */
export default function ContainerComponent({ background, zindex, children }) {
  return createPortal(
    <Container background={background} zindex={zindex}>
      {children}
    </Container>,
    document.body
  );
}
ContainerComponent.propTypes = {
  background: PropTypes.string,
  zindex: PropTypes.number.isRequired,
  children: PropTypes.object.isRequired,
};
ContainerComponent.defaultProps = {
  background: "#00000055",
};
