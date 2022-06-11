import React from "react";
import styled from "styled-components";
import whaleBG from '../../../src/components/images/loginBG.jpg'
import { WebTitle } from "../../components/styles/component.css";
import Cover from "./components/Cover";
import LoginForm from "./components/LoginForm";


const BgContainer = styled.div`
  background-image: url(${whaleBG});
  background-repeat: no-repeat;
  background-size: cover;
  height: 120vh;
`;

export default function LoginPage() {
  return (
    <BgContainer>
      <WebTitle>Worry Note</WebTitle>
      <LoginForm></LoginForm>
      <Cover></Cover>
    </BgContainer>
  );
}
