import React from "react";
import { useHistory } from "react-router-dom";
import Transition from "./styles";

export default function TransitionPage({ redirect, mode }) {
  const History = useHistory();
  const HandleAnimation = () => {
    History.push(redirect);
  };
  return <Transition onAnimationEnd={HandleAnimation} mode={mode} />;
}
