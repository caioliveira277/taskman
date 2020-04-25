import React from "react";
import PropTypes from "prop-types";
import Switch from "./styles";

/**
 * @description Switch Component
 *
 * @param   {String} [required]    checked color
 * @param   {String} [required]    text
 * @return {JSX} JSX
 *
 * @example
 *   <Switch color="#2e2e2e" text="Dark mode ?" />
 */
export default function SwitchInput({ color, text }) {
  return (
    <Switch color={color}>
      <input type="checkbox" />
      <span />
      <p>{text}</p>
    </Switch>
  );
}

SwitchInput.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
