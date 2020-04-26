import styled from "styled-components";
import { FadeAside } from "../../animations";

export const Aside = styled.aside`
  width: 25vw;
  min-width: 300px;
  height: calc(100vh - 50px);
  position: absolute;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  left: 0;
  bottom: 0;
  animation: ${FadeAside} 400ms ease;
  padding: 1rem;
  h1 {
    color: #c1c1c1;
    font-style: italic;
    font-size: 1.2rem;
    margin: 1rem 0;
  }
  hr {
    border: 1px solid #f5f5f5;
    margin: 0.5rem 0;
  }
  form button {
    float: right;
  }
`;

export const Preview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    width: 60%;
    background: ${(props) => props.colorBackground};
    padding: 0.4rem;
    border-radius: 0.4rem;
    height: 140px;
    overflow-y: auto;
    overflow-x: hidden;
    word-break: break-word;
    h2 {
      font: 600 1.3rem "Raleway", monospace;
      margin: 0.3rem auto;
      color: ${(props) => props.colorTitle};
    }
    p {
      color: ${(props) => props.colorDescription};
    }
  }
`;

export const Group = styled.div`
  margin: 1.5rem 0;
  span {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
`;
