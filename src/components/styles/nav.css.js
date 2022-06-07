import styled from "styled-components";

export const NavContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  border-right: 1px solid #e4e5e9;
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-top: 0;
    height: 60px;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    border-top: 1px solid #e4e5e9;
  }
`;
