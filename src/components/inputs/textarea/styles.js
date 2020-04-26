import styled from "styled-components";

const TextArea = styled.textarea`
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  padding-left: 1rem;
  padding-top: 1rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;

export default TextArea;
