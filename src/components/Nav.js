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

  const currentUser = useAuthUser().currentUser;
  const [navIcons, setNavIcons] = useState(nav);
  const [iconActive, setIconActive] = useState("Home");
  console.log("navIcons", navIcons);
  const user = useSelector((state) => state.user.value);
  
  function handleIconChanged(e) {
    setIconActive(e);
  }
  
  useEffect(() => {
    let profilePhoto;
    let newNavIcons;
    if (currentUser !== null) {
      console.log("incurrentuserphoto",currentUser.photoURL);      
      profilePhoto=currentUser.photoURL
      newNavIcons = navIcons.map(({ urlActive, url, ...navIcons }) => ({
        ...navIcons,
        url: url === none ? profilePhoto : url,
        urlActive: urlActive === none ? profilePhoto : urlActive,
      }));
      console.log("profilePhoto", profilePhoto);
      console.log("navIcons-new", newNavIcons);
      setNavIcons(newNavIcons);
    }
    console.log("navIcons-final", navIcons);
  }, [currentUser]);

  return currentUser ? (
    <div>
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
