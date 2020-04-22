import styled from "styled-components";
import { FadeModal } from "../animations";

export const ModalContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #00000055;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const ModalContent = styled.form`
  position: absolute;
  width: 90%;
  max-width: 600px;
  height: auto;
  background: #ffffff;
  border-radius: 0.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 25%;
  opacity: 1;
  z-index: 4;
  padding: 1rem;
  animation: ${FadeModal} 400ms cubic-bezier(0, -0.04, 0.15, 0.66);
  div {
    hr {
      border: 1px solid #f6f6f6;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  div:nth-child(1) {
    position: relative;
    h2 {
      color: #c1c1c1;
      font-style: italic;
      font-size: 1rem;
      font-weight: normal;
    }
    i {
      position: absolute;
      font-size: 2.5rem;
      top: -15px;
      right: 0;
      color: var(--color-orange);
      cursor: pointer;
      transition: all 300ms;
      :hover {
        color: var(--color-orange-2);
      }
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-around;
    figure {
      width: 40%;
      img {
        width: 100%;
      }
    }
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p:nth-child(2){
        margin-top: 1rem;
      }
      p {
        font-size: 1.2rem;
      }
      input {
        margin-top: 2rem;
        border-radius: 0.5rem;
        border: none;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
        padding-left: 1rem;
        font-size: 1rem;
        width: 100%;
        height: 45px;
      }
    }
  }
  div:nth-child(3) {
    text-align: end;
  }
`;
