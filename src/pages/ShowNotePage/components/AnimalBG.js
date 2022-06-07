import React from "react";
import whaleBG from "../../../components/images/loginBG.jpg";
import rabbitBG from "../../../components/images/rabbitBG.jpg";
import catBG from "../../../components/images/catBG.jpg";
import polarbearBG from "../../../components/images/polarbear2BG.jpg";
import brownbearBG from "../../../components/images/brownbear3BG.jpg";

import styled from "styled-components";

const DarkLayer = styled.div`
  background-color: #00000044;
  width: 100vw;
  height: 500px;
`;
const BGWrapper = styled.div`
  width: 100vw;
  height: 500px;
  position: absolute;
  top: -60px;
  /* left: -120px; */
  background-image: url(${({BGsrc})=>BGsrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    top: -60px;
    left: 0px;
  }
`;

export default function AnimalBG({BG}) {
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
  
  let BGsrc=getBG(BG);


  return (
    <BGWrapper BGsrc={BGsrc}>
      <DarkLayer></DarkLayer>
    </BGWrapper>
  );
}
