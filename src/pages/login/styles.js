import styled from "styled-components";
import { LoginFade, LoginFadeReverse } from "../../components/animations";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${process.env.PUBLIC_URL}/assets/images/background-login.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
`;

export const Section = styled.section`
  width: 90%;
  height: 700px;
  max-width: 900px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  display: flex;
  overflow: hidden;
`;

export const Figure = styled.figure`
  width: 50%;
  height: 100%;
  z-index: 2;
  transform: ${(props) =>
    props.mode === "Login" ? "translateX(100%)" : "translateX(0%)"};
  animation: ${(props) =>
      props.mode === "Login" ? LoginFade : LoginFadeReverse}
    800ms forwards cubic-bezier(0.99, -0.01, 0.21, 1);
  will-change: transform, opacity;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
