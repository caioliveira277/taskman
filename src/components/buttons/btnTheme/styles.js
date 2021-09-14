import styled from "styled-components";

const Button = styled.button`
  border: none;
  width: 7rem;
  margin: 0 auto;
  height: 2.2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: var(--color-orange);
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  transition: background 400ms;
  &:hover {
    background: var(--color-orange-2);
  }
`;

export default Button;
