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
  transform: translateX(-100%);
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
  label {
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: space-between;
    input {
      margin: 0 auto;
      border-radius: 0.5rem;
      border: none;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
      padding-left: 1rem;
      font-size: 1rem;
      width: 70%;
      height: 45px;
    }
  }
  div {
    label {
      input {
        width: 90%;
      }
    }
  }
`;

export default FormLogin;
