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
  will-change: transform, opacity;
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
  }
`;

export default FormLogin;
