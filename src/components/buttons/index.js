import React from "react";
import PropTypes from "prop-types";
import Button from "./styles";

export default function ButtonTheme({ type, text }) {
  return <Button type={type}>{text}</Button>;
}
ButtonTheme.prototype = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
