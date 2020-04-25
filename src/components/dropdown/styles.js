import styled from "styled-components";
import { FadeDropdown } from "../animations";

const Span = styled.span`
  width: 180px;
  background: #2e2e2e;
  border-radius: 0.4rem;
  overflow: hidden;
  position: absolute;
  top: 150%;
  right: 10px;
  box-shadow: 0px 5px 10px #00000065;
  animation: ${FadeDropdown} 500ms cubic-bezier(0.23, 1, 0.32, 1);
  ::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-top: -10px;
    width: 0;
    height: 0;
    right: 50px;
    position: fixed;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 10px solid var(--color-blue);
  }
  div {
    :first-child {
      background: var(--color-blue);
      width: 100%;
      height: 30px;
    }
    :last-child {
      padding: 0.5rem;
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        li {
          margin: 0.3rem;
          a {
            font: 400 1.2rem "Raleway", serif;
            color: #ffffff;
            :hover {
              color: var(--color-blue);
            }
          }
        }
        hr {
          border: 1px solid #2a212a;
          margin: 0.6rem 0;
        }
      }
    }
  }
`;

export default Span;
