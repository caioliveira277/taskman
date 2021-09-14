import styled from "styled-components";

const Group = styled.div`
  width: 280px;
  height: 530px;
  border-radius: 0.6rem;
  overflow-x: hidden;
  background: transparent;
  box-shadow: 0px 4px 15px 0px #00000050;
  border-bottom: 1px dashed #feb95485;
  border-right: 1px dashed #feb95485;
  border-left: 1px dashed #4ba1f485;
  border-top: 1px dashed #4ba1f485;
  &,
  i {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    border-radius: 0.6rem;
    border-top: 1px dashed #feb95485;
    border-left: 1px dashed #feb95485;
    border-right: 1px dashed #4ba1f485;
    border-bottom: 1px dashed #4ba1f485;
    background: #00000085;
    cursor: pointer;
    i {
      color: #ffffff;
      font-size: 4rem;
    }
  }
`;

export default Group;
