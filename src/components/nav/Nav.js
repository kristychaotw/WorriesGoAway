import React, { useEffect, useState } from "react";
import { useAuthUser } from "../../firebase";
import add from "../images/icons/add.svg";
import home from "../images/icons/home.svg";
import list from "../images/icons/list.svg";
import whale from "../images/icons/whale.svg";
import none from "../images/icons/avatar.svg";
import addActive from "../images/icons/add_active.svg";
import homeActive from "../images/icons/home_active.svg";
import listActive from "../images/icons/list_active.svg";
import whaleActive from "../images/icons/whale_active.svg";
import NavItem from "./NavItem";
import { NavContainer } from "./nav.css";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const nav = [
    { name: "add", url: add, urlActive: addActive, path: "/add" },
    { name: "home", url: home, urlActive: homeActive, path: "/home" },
    { name: "list", url: list, urlActive: listActive, path: "/list" },
    { name: "note", url: whale, urlActive: whaleActive, path: "/note" },
    { name: "user", url: none, urlActive: none, path: "/user" },
  ];

  const [iconActive, setIconActive] = useState("Home");

  function handleIconChanged(e) {
    setIconActive(e);
  }

  const location = useLocation();
  let path = location.pathname;
  let pathName;
  if (path !== none) {
    pathName = path.slice(1, path.length);
  } else {
    pathName === path;
  }

  useEffect(() => {
    if (pathName !== iconActive) setIconActive(pathName);
  }, [path]);

  const [navIcons, setNavIcons] = useState(nav);
  const currentUser = useAuthUser().currentUser;

  return currentUser ? (
    <div>
      <NavContainer>
        {navIcons.map((icon) => {
          return (
            <NavItem
              key={icon.name}
              icon={icon}
              handleIconChanged={handleIconChanged}
              iconActive={iconActive}
            ></NavItem>
          );
        })}
      </NavContainer>
    </div>
  ) : (
    <></>
  );
}
