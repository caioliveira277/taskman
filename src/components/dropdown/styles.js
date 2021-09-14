import styled from "styled-components";
import { FadeDropdown } from "../animations";

const Span = styled.span`
  width: auto;
  min-width: 180px;
  background: #ffffff;
  border-radius: 0.4rem;
  position: absolute;
  top: 157%;
  right: -10px;
  box-shadow: 0px 5px 10px #00000065;
  animation: ${FadeDropdown} 400ms ease;
  z-index: 10;
  ::before {
    content: "";
    display: block;
    background: #364347;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    position: absolute;
    border-radius: 0.3rem;
    top: -8px;
    right: 20px;
    z-index: 9;
  }
  & > div:last-child {
    padding: 0.5rem;
  }
`;

export default Span;
