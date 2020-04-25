import styled from "styled-components";

const Header = styled.header`
  background: #2e2e2e;
  width: 100vw;
  box-shadow: 0px 3px 15px #00000065;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1rem;
  color: #ffffff;
  aside {
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
  nav {
    ul {
      display: flex;
      li {
        cursor: pointer;
        font: 600 2rem "Raleway", serif;
        position: relative;
        :first-child {
          margin-right: 1rem;
        }
      }
      li.active::after,
      li:hover::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        border-radius: 1rem;
        position: absolute;
        bottom: -10px;
        background: var(--color-orange);
      }
    }
  }
  div {
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
  }
`;

export default Header;
