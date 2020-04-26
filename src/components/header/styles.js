import styled from "styled-components";

const Header = styled.header`
  background: #2e2e2e;
  width: 100vw;
  height: 50px;
  box-shadow: 0px 3px 15px #00000065;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1rem;
  color: #ffffff;
  z-index: 3;
  position: relative;
  div:first-child {
    button {
      cursor: pointer;
      border: none;
      position: relative;
      width: 40px;
      height: 40px;
      background: transparent;
      span {
        margin: 0 auto;
        position: relative;
      }
      span,
      span::before,
      span::after {
        content: "";
        border-radius: 30px;
        height: 3px;
        width: 100%;
        background: #ffffff;
        display: block;
        position: absolute;
        pointer-events: none;
        transition: all 200ms cubic-bezier(0.65, 0.08, 0.29, 1.29);
      }
      span::before {
        top: 10px;
      }
      span::after {
        bottom: 10px;
      }
      &.active {
        span {
          transform: rotate(45deg);
        }
        span::before,
        span::after {
          transform: rotate(90deg);
          top: 0;
          bottom: 0;
        }
      }
    }
  }
  div:last-child {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 1rem;
    }
    h2 {
      font: 600 1.5rem "Raleway", serif;
    }
    i {
      margin-left: 0.5rem;
    }
    span {
      div {
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          li {
            margin: 0.3rem;
            a {
              font: 500 1.2rem "Roboto", serif;
              color: #2e2e2e;
              :hover {
                color: var(--color-blue);
              }
            }
          }
          hr {
            border: 1px solid #f5f5f5;
            margin: 0.6rem 0;
          }
        }
      }
    }
  }
`;

export default Header;
