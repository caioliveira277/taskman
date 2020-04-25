import { keyframes } from "styled-components";

export const LoginFade = keyframes`
  from {
    border-right: 0px solid var(--color-orange);;
  }
  to {
    border-right: 2px solid var(--color-orange);;
    transform: translateX(0%);
  }
  `;
export const LoginFadeReverse = keyframes`
  from{
    border-left: 0px solid var(--color-orange);;
  }
  to {
    border-left: 2px solid var(--color-orange);;
    transform: translateX(100%);
  }
`;

export const FadeForm = keyframes`
  0% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
  100% { 
    opacity: 1;
  }
`;
export const FadeFormReset = keyframes`
  0% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
  100% {
    opacity: 2;
  }
`;

export const FadeModal = keyframes`
  from {
    top: -10%;
    opacity: 0;
  }
  to {
    top: 25%;
    opacity: 1;
  }
`;

export const TransitionAnim = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
  `;
export const TransitionAnimReverse = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;
export const FadeDropdown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;
export const FadeTextTransition = keyframes`
  to {
    opacity: 1;
  }
`;
