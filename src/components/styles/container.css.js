import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  max-width: 2000px;
  height: 100vh;
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  overflow-x: hidden;
`;

export const PageContainer = styled.div`
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
  padding-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    display: block;
    margin-top: 20px;
    margin: auto;
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 90%;
  }
`;
