import React from "react";
import PropTypes from "prop-types";
import Switch from "./styles";

export default function SwitchInput({ color, text }) {
  const SwitchFn = () => {
    return (
      <Switch color={color}>
        <input type="checkbox" />
        <span />
        <p>{text}</p>
      </Switch>
    );
  };
  return SwitchFn();
}

SwitchInput.prototype = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
