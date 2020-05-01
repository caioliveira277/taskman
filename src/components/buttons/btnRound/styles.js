import styled from "styled-components";

const Button = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  background: #fff;
  box-shadow: 0px 5px 12px #00000045;
  transition: all 250ms ease;
  i {
    color: #000000dd;
    font-size: 24px;
  }
  :hover {
    box-shadow: 0px 12px 12px #00000045;
  }
  :active {
    box-shadow: 0px 5px 12px #00000045;
    background: #f5f5f5;
  }
`;

export default Button;
