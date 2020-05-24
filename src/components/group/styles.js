import styled from "styled-components";
import { FadeNewGroup } from "../animations";

const Group = styled.div`
  width: 300px;
  height: 530px;
  border-radius: 0.6rem;
  background: ${(props) => props.background};
  box-shadow: 0px 4px 15px 0px #00000050;
  animation: ${(props) => !props.startAnimation || FadeNewGroup} 700ms
    cubic-bezier(0.76, 0.77, 0.17, 1);
  & > hr {
    margin-bottom: 0 !important;
  }
  hr {
    border: 1px solid #f6f6f685;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & > div {
    :first-child {
      padding: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      button {
        position: relative;
      }
      input {
        margin-left: 0.2rem;
        border: none;
        background: transparent;
        font: bold 24px "Roboto", sans-serif;
        color: #ffffff;
        width: 100%;
      }
      input:not([disabled]) {
        border: 1px dashed blue;
      }
    }
    :last-child {
      overflow-y: auto;
      max-height: calc(100% - 65px);
      padding: 0 10px;
    }
  }
`;
export default Group;
