import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBtn = styled.button`
  margin: 0px 10px;
  margin-bottom: ${({ space }) => space * 150 || 20}px;
  padding: 10px 10px;
  border-bottom: ${({ space }) => space || 0}px solid #5085a5;
  background-image: url(url);

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    margin: 0;
    padding: 10px 10px;
    border-bottom: none;
  }
`;

const IconWrapper = styled.div`
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

export default function NavItem({ icon, handleIconChanged,iconActive }) {
  return (
    <>
      <Link to={`${icon.path}`}>
        <NavBtn
          space={icon.name === "Add" && "1"}
          onClick={() => handleIconChanged(icon.name)}
        >
          <IconWrapper wh={icon.name==="User"?"100%":"auto"}borderR={icon.name==="User"?"100%":"0%"} border={icon.name==="User"? "2px":"0"}>
            <img
              src={iconActive === icon.name ? `${icon.urlActive}` : `${icon.url}`}
            ></img>
          </IconWrapper>
        </NavBtn>
      </Link>
    </>
  );
}
