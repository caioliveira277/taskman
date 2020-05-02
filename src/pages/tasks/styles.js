import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: url("https://images.wallpaperscraft.com/image/fern_leaf_plant_green_119970_1920x1080.jpg");
  overflow-x: hidden;
  section {
    margin: 1.5rem;
    justify-content: space-around;
    grid-gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
  }
`;
