import React, { useState } from "react";
import styled from "styled-components";
import add from "./images/icons/add.svg";
import home from "./images/icons/home.svg";
import list from "./images/icons/list.svg";
import whale from "./images/icons/whale.svg";
import none from "./images/icons/userphoto.svg";
import addActive from "./images/icons/add_active.svg";
import homeActive from "./images/icons/home_active.svg";
import listActive from "./images/icons/list_active.svg";
import whaleActive from "./images/icons/whale_active.svg";
import NavItem from "./NavItem";

const NavContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 100px;
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
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    border-top: 1px solid #e4e5e9;
  }
`;

export default function Nav() {
  const navIcons = [
    { name: "Add", url: add, urlActive: addActive, path: "/Add" },
    { name: "Home", url: home, urlActive: homeActive, path: "/Home" },
    { name: "List", url: list, urlActive: listActive, path: "/List" },
    { name: "Whale", url: whale, urlActive: whaleActive, path: "/Whale" },
    { name: "User", url: none, urlActive: none, path: "/User" },
  ];

  const [iconActive, setIconActive] = useState("Home");
  function handleIconChanged(e) {
    setIconActive(e);
    console.log("iconActive:", iconActive);
  }


  const NavList = navIcons.map((icon) => (
    <NavItem key={icon.name} icon={icon} handleIconChanged={handleIconChanged} iconActive={iconActive}></NavItem>
  ));
  return (
    <div>
      <NavContainer>{NavList}</NavContainer>
      {console.log("render")}
    </div>
  );
}
