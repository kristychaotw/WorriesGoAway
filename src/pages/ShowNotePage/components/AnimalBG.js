import React from "react";
import whaleBG from "../../../components/images/loginBG.jpg";
import rabbitBG from "../../../components/images/rabbitBG.jpg";
import catBG from "../../../components/images/catBG.jpg";
import polarbearBG from "../../../components/images/polarbear2BG.jpg";
import brownbearBG from "../../../components/images/brownbear3BG.jpg";

import styled from "styled-components";

const BGWrapper = styled.div`
  z-index: 8;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url(${({ BGsrc }) => BGsrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    background-position: center top;
  }

`;

const DarkLayer = styled.div`
  background-color: #00000044;
  width: 100%;
  height: 100%;
`;

export default function AnimalBG({ BG }) {
  function getBG(BG) {
    if (BG === "cat") {
      return catBG;
    } else if (BG === "whale") {
      return whaleBG;
    } else if (BG === "rabbit") {
      return rabbitBG;
    } else if (BG === "polarbear") {
      return polarbearBG;
    } else if (BG === "brownbear") {
      return brownbearBG;
    } else {
      whaleBG;
    }
  }

  let BGsrc = getBG(BG);

  return (
    <BGWrapper grid={"animalBG"} BGsrc={BGsrc}>
      <DarkLayer></DarkLayer>
    </BGWrapper>
  );
}
