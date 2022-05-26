import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  margin: 0px auto;
  padding: 60px 60px;
  padding: ${({padding})=>padding||"60px"};
  box-sizing: border-box;
  height: 100vh;
  text-align: center;
`;
