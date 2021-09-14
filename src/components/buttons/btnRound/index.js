import React from "react";
import PropTypes from "prop-types";
import Button from "./styles";

/**
 * @description Button Round Component
 *
 * @param   {Object} [Object] [required]    children
 * @param   {Function} [Function] [optional]    onClick = () => null
 * @param   {String} [String] [optional]    type = button
 * @param   {String} [String] [optional]    name = ""
 * @return {JSX} JSX
 *
 * @example
 *   <ButtonRound type="submit"> <Content/> </ButtonRound>
 */
export default function ButtonRound({ children, onClick, type, name }) {
  return (
    <Button type={type} name={name} onClick={onClick}>
      {children}
    </Button>
  );
}

ButtonRound.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
};
ButtonRound.defaultProps = {
  onClick: () => null,
  name: "",
  type: "button",
};
