import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "1200px"};
  height: 100vh;
  margin: 0px auto;
  padding: ${({padding})=>padding||"0px"};
  text-align: center;
`;


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 60%;
  max-width: 1200px;
  margin: 40px auto;
  margin-right: 110px;
  margin-top: 230px;
  text-align: center;
  grid-template-areas:
    "email"
    "avatar"
    "logout";
  grid-gap: 40px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 80%;
    margin-right: auto;
    margin-top: auto;
  }
`;