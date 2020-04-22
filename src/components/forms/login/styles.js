import styled from "styled-components";
import { FadeForm, FadeFormReset } from "../../animations";

const FormLogin = styled.form`
  width: 50%;
  height: 100%;
  background: #ffffff;
  text-align: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  z-index: 1;
  opacity: 0;
  animation: ${(props) => (props.mode === "login" ? FadeForm : FadeFormReset)}
    900ms forwards;
  transform: ${(props) =>
    props.mode === "signin" ? "translateX(-100%)" : "translateX(0%)"};
  em,
  div,
  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  em {
    p {
      color: #c1c1c1;
      font-style: italic;
    }
  }
  h1 {
    font: bold 40px "Raleway", sans-serif;
  }
  div {
    svg {
      font-size: 2.5rem;
    }
    input {
      border-radius: 0.5rem;
      border: none;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
      padding-left: 1rem;
      font-size: 1rem;
      width: 70%;
      height: 45px;
    }
  }
  span {
    a {
      margin-left: 30%;
    }
  }
`;

export default FormLogin;
