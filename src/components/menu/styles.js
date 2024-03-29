import styled from "styled-components";

export const Menu = styled.div`
  pointer-events: none;
  position: fixed;
  bottom: 70px;
  right: 70px;
  z-index: 5;
  overflow: hidden;
  padding: 6px;
  &.active {
    pointer-events: all;
    & > button {
      transform: rotate(45deg);
    }
    ul {
      opacity: 1;
      transform: translateY(0);
    }
  }
  & > button {
    pointer-events: all;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--color-orange);
    cursor: pointer;
    padding: 14px;
    box-shadow: 0px 0px 12px #feb95485;
    transition: all 150ms ease;
    i {
      color: #ffffff;
      font-size: 1.4rem;
    }
  }
`;

export const Box = styled.ul`
  opacity: 0;
  transform: translateY(50%);
  width: 50px;
  min-height: 150px;
  background: #f5f5f5;
  margin-bottom: 20px;
  border-radius: 60px;
  padding: 8px;
  box-shadow: 0px 5px 10px #00000055;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 150ms ease;
  li {
    text-align: center;
  }
`;

export const Content = styled.form`
  & > :first-child {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
`;
