/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import PropTypes from "prop-types";
import { Span, DropPicker } from "./styles";

/**
 * @description ColorPicker Component
 *
 * @param   {String} [optional]    onChange = () => null, used to get the color
 * @param   {String} [optional]    name = ""
 * @param   {String} [optional]    colorDefault = "#2e2e2e"
 * @return {JSX} JSX
 *
 * @example
 *   <ColorPicker onChange={HandlerChange} name="picker1" colorDefault="#2e44e4"/>
 */
export default function ColorPicker({ onChange, name, colorDefault }) {
  const [picker, setPicker] = useState({
    display: false,
    color: colorDefault,
  });
  const HandlerChange = ({ hex }) => {
    setPicker({
      ...picker,
      color: hex,
    });
    const event = {
      target: {
        name: [name],
        value: hex,
      },
    };
    onChange(event);
  };
  const HandlerClick = () => {
    let state = false;
    if (!picker.display) state = true;
    setPicker({
      ...picker,
      display: state,
    });
  };
  return (
    <Span color={picker.color}>
      <button type="button" onClick={HandlerClick} />
      {picker.display === true ? (
        <DropPicker color={picker.color}>
          <ChromePicker color={picker.color} onChangeComplete={HandlerChange} />
        </DropPicker>
      ) : null}
    </Span>
  );
}

ColorPicker.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  colorDefault: PropTypes.string,
};
ColorPicker.defaultProps = {
  name: "",
  onChange: () => null,
  colorDefault: "#2e2e2e",
};
