import React from "react";
import PropTypes from "prop-types";
import Button from "./styles";

export default function ButtonTheme({ type, text }) {
  const ButtonFn = () => {
    return <Button type={type}>{text}</Button>;
  };
  return ButtonFn();
}
ButtonTheme.prototype = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
