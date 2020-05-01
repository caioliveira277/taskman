import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  background: ${(props) => props.background};
  top: 0;
  left: 0;
  z-index: ${(props) => props.zindex};
  overflow-y: auto;
`;

export default Container;
