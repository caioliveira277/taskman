import React from "react";
import PropTypes from "prop-types";
import Span from "./styles";

export default function Dropdown({ image, children }) {
  return (
    <Span background={image}>
      <figure />
      <div>{children}</div>
    </Span>
  );
}
Dropdown.propTypes = {
  image: PropTypes.string.isRequired,
  // children: PropTypes.isRequired
};
