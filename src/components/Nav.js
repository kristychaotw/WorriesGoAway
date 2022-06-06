import React, { useEffect, useState } from "react";
import { useAuthUser } from "../firebase";
import add from "./images/icons/add.svg";
import home from "./images/icons/home.svg";
import list from "./images/icons/list.svg";
import whale from "./images/icons/whale.svg";
import none from "./images/icons/avatar.svg";
import addActive from "./images/icons/add_active.svg";
import homeActive from "./images/icons/home_active.svg";
import listActive from "./images/icons/list_active.svg";
import whaleActive from "./images/icons/whale_active.svg";
import NavItem from "./NavItem";
import { NavContainer } from "./styles/nav.css";
import { useSelector } from "react-redux";

export default function Nav() {
  const navIcons = [
    { name: "Add", url: add, urlActive: addActive, path: "/Add" },
    { name: "Home", url: home, urlActive: homeActive, path: "/Home" },
    { name: "List", url: list, urlActive: listActive, path: "/List" },
    { name: "Whale", url: whale, urlActive: whaleActive, path: "/Whale" },
    { name: "User", url: none, urlActive: none, path: "/User" },
  ];

  const currentUser = useAuthUser().currentUser;
  const [iconList, setIconList] = useState([]);
  const [iconActive, setIconActive] = useState("Home");

  const user = useSelector((state) => state.user.value);
  console.log("userstate:", user);
  const profilePhoto = user.picture;


  function handleIconChanged(e) {
    setIconActive(e);
  }

  let newList;
  function updateNavIcons(navIcons, oldURL, newURL) {
    newList = navIcons.map(({ urlActive, url, ...navIcons }) => ({
      ...navIcons,
      url: url === oldURL ? newURL : url,
      urlActive: urlActive === oldURL ? newURL : urlActive,
    }));
  }
  
  
  useEffect(()=>{
    setIconList(newList)
  },[profilePhoto])

  const NavList = iconList ? (
    iconList.map((icon) => (
      <NavItem
        key={icon.name}
        icon={icon}
        handleIconChanged={handleIconChanged}
        iconActive={iconActive}
      ></NavItem>
    ))
  ) : (
    <></>
  );

  return (
    <div onLoad={updateNavIcons(navIcons, none, profilePhoto)}>
      <NavContainer display={currentUser == null ? "none" : "flex"}>
        {NavList}
      </NavContainer>
    </div>
  );
}
