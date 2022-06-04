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
`;

export default function NavItem({ icon, handleIconChanged,iconActive }) {
  return (
    <>
      <Link to={`${icon.path}`}>
        <NavBtn
          space={icon.name === "Add" && "1"}
          onClick={() => handleIconChanged(icon.name)}
        >
          <IconWrapper>
            <img
              src={iconActive === icon.name ? `${icon.urlActive}` : `${icon.url}`}
            ></img>
          </IconWrapper>

          {/* {console.log("icon:", icon.path)} */}
        </NavBtn>
      </Link>
    </>
  );
}
