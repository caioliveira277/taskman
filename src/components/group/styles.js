import styled from "styled-components";

const Group = styled.section`
  width: 280px;
  min-height: 530px;
  border-radius: 0.6rem;
  overflow-x: hidden;
  background: #c1c1c1;
  box-shadow: 0px 4px 15px 0px #00000050;
  div {
    :first-child {
      padding: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
    }
    :last-child {
      overflow-y: auto;
    }
  }
`;
export default Group;
