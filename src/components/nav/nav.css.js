import styled from "styled-components";

export const NavContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 83px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  border-right: 1px solid #e4e5e9;
  z-index: 99;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-top: 0;
    height: 60px;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    border-top: 1px solid #e4e5e9;
  }
`;

export const NavBtn = styled.button`
  margin: 0px 10px;
  margin-bottom: ${({ space }) => space * 80 || 20}px;
  padding: 10px 10px;
  border-bottom: ${({ space }) => space || 0}px solid #5085a5;
  background-image: url(url);

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    margin: 0;
    padding: 10px 10px;
    border-bottom: none;
  }
`;

export const IconWrapper = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
  border-radius: ${({borderR})=>borderR};
  object-fit: cover;
  height: ${({wh})=>wh};
  width: ${({wh})=>wh};
  border: outset ${({theme})=>theme.colors.primary} ${({border})=>border};
}
`;