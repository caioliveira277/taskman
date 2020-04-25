import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.3s;
  }
  span:before {
    content: "";
    position: absolute;
    height: 17px;
    width: 17px;
    left: 4px;
    bottom: 4px;
    background-color: #ffffff;
    transition: 0.4s;
  }
  input:checked + span {
    background: ${(props) => props.color || "#dddddd"};
  }
  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + span:before {
    transform: translateX(26px);
  }
  span {
    border-radius: 34px;
  }
  span:before {
    border-radius: 50%;
  }
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(60%, -50%);
    cursor: pointer;
  }
`;

export default Switch;
