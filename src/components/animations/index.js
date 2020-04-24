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
  0% {
    transform: translate3d(0, 100%, 0);
    width: 10vw;
  }
  25%{
    transform: translate3d(0, 0, 0);
  }
  50%, 100% {
    width: 10vw;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    width: 100vw;
    transform: translate3d(0, 0, 0);
  }
  `;
export const TransitionAnimReverse = keyframes`
  50% {
    transform: translate3d(90%, -100%, 0);
  }
  100% {
    transform: translate3d(90%, 100%, 0);
  }
`;
