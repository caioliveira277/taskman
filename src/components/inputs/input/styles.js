import styled from "styled-components";

const Input = styled.input`
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  padding-left: 1rem;
  font-size: 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;

export default Input;
