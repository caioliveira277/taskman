import React from "react";
import PropType from "prop-types";
import TextArea from "./styles";

/**
 * @description Textarea component
 *
 * @param   {String} [String] [optional]    placeholder = ""
 * @param   {String} [String] [optional]    width = "100%"
 * @param   {String} [String] [optional]    height = "45px"
 * @param   {String} [String] [optional]    margin = "0"
 * @param   {Number} [optional]    rows = 1
 * @param   {Number} [optional]    cols = 1
 * @param   {Boolean} [optional]   required = false
 * @param   {Function} [Function] [optional]  onChange = () => null
 * @param   {String} [String] [optional]    name = ""
 * @return {JSX} JSX
 *
 * @example
 *   <TextArea placeholder="Description" margin="1rem" rows={5} />
 */
export default function TextAreaComponent({
  width,
  height,
  margin,
  required,
  placeholder,
  rows,
  cols,
  onChange,
  name,
}) {
  return (
    <TextArea
      width={width}
      height={height}
      margin={margin}
      required={required}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      onChange={onChange}
      name={name}
    />
  );
}
TextAreaComponent.propTypes = {
  width: PropType.string,
  height: PropType.string,
  margin: PropType.string,
  required: PropType.bool,
  placeholder: PropType.string.isRequired,
  rows: PropType.number,
  cols: PropType.number,
  onChange: PropType.func,
  name: PropType.string,
};
TextAreaComponent.defaultProps = {
  width: "100%",
  height: "45px",
  margin: "0",
  required: false,
  rows: 1,
  cols: 1,
  onChange: () => null,
  name: "",
};
