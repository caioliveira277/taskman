import React from "react";
import { useHistory } from "react-router-dom";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Transition from "./styles";

/**
 * @description TransitionPage component
 *
 * @param   {String} [String] [required]    redirect after animation
 * @param   {String} [String] [optional]    text during the transition
 * @param   {String} [String] [optional]    mode = normal || accept: 'reverse'
 * @return {JSX} JSX
 *
 * @example
 *   <TransitionPage redirect="/profile" text="Profile" mode="reverse" />
 */
export default function TransitionPage({ redirect, mode, text }) {
  const History = useHistory();

  const HandlerAnimation = () => {
    if (redirect) {
      History.push(redirect);
    }
  };
  const HandlerTransition = ({ target }) => {
    if (mode === "reverse") target.remove();
  };
  return createPortal(
    <Transition mode={mode} onAnimationEnd={HandlerTransition}>
      <h1 onAnimationEnd={HandlerAnimation}>{text}</h1>
    </Transition>,
    document.body
  );
}

TransitionPage.propTypes = {
  redirect: PropTypes.string,
  mode: PropTypes.string,
  text: PropTypes.string,
};
TransitionPage.defaultProps = {
  mode: "normal",
  text: "",
  redirect: "",
};
