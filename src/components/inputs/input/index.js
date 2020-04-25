import React from "react";
import PropType from "prop-types";
import Input from "./styles";

/**
 * @description Input component
 *
 * @param   {String} [optional]    type = "text"
 * @param   {String} [optional]    placeholder = ""
 * @param   {String} [optional]    autocomplete = "on"
 * @param   {String} [optional]    width = "100%"
 * @param   {String} [optional]    margin = "0"
 * @param   {Boolean} [optional]    required = false
 * @return {JSX} JSX
 *
 * @example
 *   <Input type="text" placeholder="Username" autcomplete="off" />
 */
export default function InputComponent({
  type,
  placeholder,
  autocomplete,
  width,
  margin,
  required,
}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      autocomplete={autocomplete}
      width={width}
      margin={margin}
      required={required}
    />
  );
}
InputComponent.propTypes = {
  type: PropType.string,
  placeholder: PropType.string,
  autocomplete: PropType.string,
  width: PropType.string,
  margin: PropType.string,
  required: PropType.bool,
};
InputComponent.defaultProps = {
  type: "text",
  placeholder: "",
  autocomplete: "on",
  width: "100%",
  margin: "0",
  required: false,
};
