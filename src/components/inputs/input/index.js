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
 * @param   {String} [optional]    height = "45px"
 * @param   {String} [optional]    margin = "0"
 * @param   {Boolean} [optional]   required = false
 * @param   {Function} [optional]  onChange = () => null
 * @param   {String} [optional]    name = ""
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
  height,
  margin,
  required,
  onChange,
  name,
}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      autocomplete={autocomplete}
      width={width}
      height={height}
      margin={margin}
      required={required}
      onChange={onChange}
      name={name}
    />
  );
}
InputComponent.propTypes = {
  type: PropType.string,
  placeholder: PropType.string,
  autocomplete: PropType.string,
  width: PropType.string,
  height: PropType.string,
  margin: PropType.string,
  required: PropType.bool,
  onChange: PropType.func,
  name: PropType.string,
};
InputComponent.defaultProps = {
  type: "text",
  placeholder: "",
  autocomplete: "on",
  width: "100%",
  height: "45px",
  margin: "0",
  required: false,
  onChange: () => null,
  name: "",
};
