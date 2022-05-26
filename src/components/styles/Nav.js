import React, { useState } from "react";
import styled from "styled-components";
import add from "../images/icons/add.svg";
import home from "../images/icons/home.svg";
import list from "../images/icons/list.svg";
import whale from "../images/icons/whale.svg";
import none from "../images/icons/userphoto.svg";
import addActive from "../images/icons/add_active.svg";
import homeActive from "../images/icons/home_active.svg";
import listActive from "../images/icons/list_active.svg";
import whaleActive from "../images/icons/whale_active.svg";

const NavContainer = styled.div`
  background-color: ${({theme})=>theme.colors.white};
  padding-top: 100px;
  height: 100vh;
  /* display: flex; */
  display: ${({ display }) => display || "flex"};
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  border-right: 1px solid #e4e5e9;
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-top: 0;
    height: 60px;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
    border-top: 1px solid #e4e5e9;
  }
`;

const NavBtn = styled.button`
  margin: 0px 10px;
  margin-bottom: ${({ layout }) => layout * 150 || 20}px;
  padding: 10px 10px;
  border-bottom: ${({ layout }) => layout || 0}px solid #5085a5;
  background-image: url(url);

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    margin: 0;
    padding: 10px 10px;
    border-bottom: none;
  }
`;

const IconWrapper = styled.div`
  /* border-radius: 100%;
  overflow: hidden; */
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* & > img {
    width: 120%;
  } */
`;

export default function Nav() {
  const [iconActive, setIconActive] = useState("Home");
  const navIcons = [
    { name: "Add", url: add, urlActive: addActive },
    { name: "Home", url: home, urlActive: homeActive },
    { name: "List", url: list, urlActive: listActive },
    { name: "Whale", url: whale, urlActive: whaleActive },
    { name: "User", url: none, urlActive: none },
  ];

  return (
    <div>
      <NavContainer>
        {navIcons.map((icons) => {
          return (
            <NavBtn
              layout={icons.name === "Edit" && "1"}
              key={icons.name}
              onClick={() => setIconActive(icons.name)}
            >
              <IconWrapper>
                <img
                  src={
                    iconActive === icons.name
                      ? `${icons.urlActive}`
                      : `${icons.url}`
                  }
                ></img>
              </IconWrapper>
            </NavBtn>
          );
        })}
      </NavContainer>
    </div>
  );
}
