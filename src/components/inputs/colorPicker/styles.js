import styled from "styled-components";
import { FadeDropPicker } from "../../animations";

export const Span = styled.span`
  width: auto;
  position: relative;
  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: ${(props) => props.color};
    box-shadow: 0px 5px 10px #00000065;
  }
`;

export const DropPicker = styled.div`
  width: 180px;
  background: #ffffff;
  border-radius: 0.4rem;
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 5px 10px #00000065;
  animation: ${FadeDropPicker} 400ms ease;
  z-index: 2;
  ::before {
    content: "";
    display: block;
    background: ${(props) => props.color};
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    position: absolute;
    border-radius: 0.3rem;
    top: -8px;
    right: 80px;
  }
  div {
    margin: 0 auto;
  }
`;
