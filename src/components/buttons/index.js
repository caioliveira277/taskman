import React from "react";
import PropTypes from "prop-types";
import Button from "./styles";

/**
 * @description Button Component
 *
 * @param   {String} [required]    type
 * @param   {String} [required]    text
 * @return {JSX} JSX
 *
 * @example
 *   <Button type="submit" text="Send"/>
 */
export default function ButtonTheme({ type, text }) {
  return <Button type={type}>{text}</Button>;
}
ButtonTheme.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
