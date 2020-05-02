/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { CirclePicker } from "react-color";
import PropTypes from "prop-types";
import Dropdown from "../../dropdown";
import CustomPicker from "./styles";

/**
 * @description ColorPicker Component
 *
 * @param   {String} [String] [optional]    onChange = () => null, used to get the color
 * @param   {String} [String] [optional]    name = ""
 * @param   {String} [String] [optional]    colorDefault = "#2e2e2e"
 * @return {JSX} JSX
 *
 * @example
 *   <ColorPicker onChange={HandlerChange} name="picker1" colorDefault="#2e44e4"/>
 */
export default function ColorPicker({
  onChange,
  name,
  colorDefault,
  closeClick,
}) {
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
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#4ba1f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#feb954",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
    "#2e2e2e",
    "#AFAFAF",
  ];

  return (
    <Dropdown header="" closeClick={closeClick}>
      <CustomPicker>
        <CirclePicker
          width="auto"
          colors={colors}
          color={picker.color}
          onChange={HandlerChange}
        />
      </CustomPicker>
    </Dropdown>
  );
}

ColorPicker.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  colorDefault: PropTypes.string,
  closeClick: PropTypes.bool,
};
ColorPicker.defaultProps = {
  name: "",
  onChange: () => null,
  colorDefault: "#2e2e2e",
  closeClick: false,
};
