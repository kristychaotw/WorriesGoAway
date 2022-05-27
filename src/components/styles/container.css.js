import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  height: 100vh;
  margin: 0px auto;
  padding: ${({padding})=>padding||"0px"};
  /* padding: ${({padding})=>padding||"60px"}; */
  box-sizing: border-box;
  text-align: center;
`;
