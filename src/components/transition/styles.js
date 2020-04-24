import styled from "styled-components";
import { TransitionAnim, TransitionAnimReverse } from "../animations";

const Transition = styled.section`
  background: var(--color-blue);
  position: fixed;
  animation: ${(props) =>
      props.mode === "reverse" ? TransitionAnimReverse : TransitionAnim}
    1.2s ease-in-out
    ${(props) => (props.mode === "reverse" ? "forwards" : "forwards")};
  will-change: transform;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100vh;
  ${(props) => (props.mode === "reverse" ? "width: 100vw;" : "")};
`;

export default Transition;
