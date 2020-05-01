import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Container from "./styles";

/**
 * @description Container Component
 * @summary rendered directly in the 'body'
 *
 * @param   {String} [String] [optional]    background = "#00000055"
 * @param   {Number} [optional]    zindex: z-index property css
 * @param   {Function} [Function] [optional]  onclick = () => ()
 * @return {JSX} JSX
 *
 * @example
 *   <Container background="tomato" zindex="3"> ... </Container>
 */
export default function ContainerComponent({
  background,
  zindex,
  children,
  onClick,
}) {
  return createPortal(
    <Container background={background} zindex={zindex} onClick={onClick}>
      {children}
    </Container>,
    document.body
  );
}
ContainerComponent.propTypes = {
  background: PropTypes.string,
  zindex: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onClick: PropTypes.func,
};
ContainerComponent.defaultProps = {
  background: "#00000055",
  zindex: 2,
  onClick: () => null,
};
