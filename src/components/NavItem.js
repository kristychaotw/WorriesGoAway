import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBtn, IconWrapper } from "./styles/nav.css";



export default function NavItem({ icon, handleIconChanged,iconActive }) {
  return (
    <>
      <Link to={`${icon.path}`}>
        <NavBtn
          space={icon.name === "add" && "1"}
          onClick={() => handleIconChanged(icon.name)}
        >
          <IconWrapper wh={icon.name==="user"?"100%":"auto"}borderR={icon.name==="user"?"100%":"0%"} border={icon.name==="user"? "2px":"0"}>
            <img
              src={iconActive === icon.name ? `${icon.urlActive}` : `${icon.url}`}
            ></img>
          </IconWrapper>
        </NavBtn>
      </Link>
    </>
  );
}
