import React from "react";
import whaleBG from "../../../components/images/loginBG.jpg";
import styled from "styled-components";

const DarkLayer = styled.div`
background-color: #00000044;
width: 100%;
height: 500px;
`
const BGWrapper = styled.div`
  position: absolute;
  top: -60px;
  left: -120px;
  background-image: url(${whaleBG});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
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
