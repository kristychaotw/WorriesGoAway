import React from "react";
import whaleBG from "../../../components/images/loginBG.jpg";
import styled from "styled-components";

const DarkLayer = styled.div`
background-color: #00000044;
width: 100vw;
height: 500px;

`
const BGWrapper = styled.div`
  width: 100vw;
  height: 500px;
  position: absolute;
  top: -60px;
  /* left: -120px; */
  background-image: url(${whaleBG});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: ${({ theme }) => theme.device.tablet}) {
  top: -60px;
  left: -60px;
  }
`;

export default function AnimalBG() {
  return (
    <BGWrapper>
      <DarkLayer></DarkLayer>
    </BGWrapper>
  );
}
