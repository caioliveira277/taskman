import styled from "styled-components";
import { FadeDropdown } from "../animations";

const Span = styled.span`
  width: 180px;
  background: #ffffff;
  border-radius: 0.4rem;
  position: absolute;
  top: 150%;
  right: 10px;
  box-shadow: 0px 5px 10px #00000065;
  animation: ${FadeDropdown} 400ms ease;
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
  }
  figure {
    background: var(--color-blue);
    background: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 50px;
    border-radius: 0.4rem 0.4rem 0 0;
  }
  div {
    padding: 0.5rem;
  }
`;

export default Span;
