import React from "react";
import Switch from "./styles";

export default function SwitchInput({ color, text }) {
  return (
    <Switch color={color}>
      <input type="checkbox" />
      <span />
      <p>{text}</p>
    </Switch>
  );
}
