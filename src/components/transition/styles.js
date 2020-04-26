import styled from "styled-components";
import {
  TransitionAnim,
  TransitionAnimReverse,
  FadeTextTransition,
} from "../animations";

const Transition = styled.div`
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
  background: var(--color-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) =>
      props.mode === "reverse" ? TransitionAnimReverse : TransitionAnim}
    600ms ease ${(props) => props.mode} forwards;
  will-change: transform;
  height: 100vh;
  width: 100vw;
  ${(props) => (props.mode === "reverse" ? "width: 100vw;" : "")};
  h1 {
    font: normal 3.5rem monospace;
    color: #ffffff;
    opacity: 0;
    position: absolute;
    top: 30%;
    animation: ${FadeTextTransition} 800ms 700ms alternate;
  }
`;

export default Transition;
