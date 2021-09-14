import styled from "styled-components";

const Task = styled.span`
  background: #ffffff;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.3rem;
  width: 100%;
  min-height: 150px;
  & > div:first-child,
  & > div:last-child {
    padding: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    figure {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 0.8rem;
      }
      figcaption {
        color: #000000;
      }
    }
    span {
      button {
        margin: 0 0.3rem;
      }
    }
  }
  & > div:last-child {
    align-items: flex-end !important;
  }
  & > :nth-child(3) {
    display: flex;
    align-items: center;
    max-height: 80px;
    padding: 0.4rem;
    p {
      text-align: start;
    }
  }
`;

export default Task;
