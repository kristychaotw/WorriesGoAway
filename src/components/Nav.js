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
  const nav = [
    { name: "Add", url: add, urlActive: addActive, path: "/Add" },
    { name: "Home", url: home, urlActive: homeActive, path: "/Home" },
    { name: "List", url: list, urlActive: listActive, path: "/List" },
    { name: "Whale", url: whale, urlActive: whaleActive, path: "/Whale" },
    { name: "User", url: none, urlActive: none, path: "/User" },
  ];

  const [iconActive, setIconActive] = useState("Home");
  console.log("navIcons", navIcons);

  function handleIconChanged(e) {
    setIconActive(e);
  }

  const user = useSelector((state) => state.user.value);
  const currentUser = useAuthUser().currentUser;
  const [navIcons, setNavIcons] = useState(nav);

  const updateList = (newPhoto) => {
    const newlist = navIcons.map((icon) =>
      icon.name === "User"
        ? { ...icon, 
          url: newPhoto?newPhoto: none, 
          urlActive: newPhoto? newPhoto:none }
        : icon
    );

    setNavIcons(newlist);

    console.log("navIcons", navIcons);
    console.log("newlist", newlist);
    console.log("navIcons2", navIcons);
  };

  useEffect(() => {
    {
      if (currentUser) {
        updateList(currentUser.photoURL);
        console.log("navIcons3", navIcons);
      }
    }
  }, [currentUser]);

  return currentUser ? (
    <div>
      {console.log("navIcons4", navIcons)}
      <NavContainer>
        {navIcons.map((icon) => (
          <NavItem
            key={icon.name}
            icon={icon}
            handleIconChanged={handleIconChanged}
            iconActive={iconActive}
          ></NavItem>
        ))}
      </NavContainer>
    </div>
  ) : (
    <></>
  );
}
