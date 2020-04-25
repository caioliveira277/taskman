import styled from "styled-components";
import {
  TransitionAnim,
  TransitionAnimReverse,
  FadeTextTransition,
} from "../animations";

const Transition = styled.section`
  background: var(--color-blue);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) =>
      props.mode === "reverse" ? TransitionAnimReverse : TransitionAnim}
    600ms ease ${(props) => props.mode} forwards;
  will-change: transform;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  ${(props) => (props.mode === "reverse" ? "width: 100vw;" : "")};
  h1 {
    font: normal 3.5rem monospace;
    color: #ffffff;
    opacity: 0;
    transform: translateY(50%);
    animation: ${FadeTextTransition} 800ms 700ms alternate;
  }
`;

export default Transition;
