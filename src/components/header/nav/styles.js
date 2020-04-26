import styled from "styled-components";

const Nav = styled.nav`
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
`;
export default Nav;
