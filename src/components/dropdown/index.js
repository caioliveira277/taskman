import React from "react";
import PropTypes from "prop-types";
import Span from "./styles";

export default function Dropdown({ children, header, closeClick }) {
  const HandlerClick = (event) => {
    event.stopPropagation();
  };
  return (
    <Span onClick={!closeClick ? HandlerClick : null}>
      {header}
      {children}
    </Span>
  );
}
Dropdown.propTypes = {
  header: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
  closeClick: PropTypes.bool,
};
Dropdown.defaultProps = {
  closeClick: true,
};
