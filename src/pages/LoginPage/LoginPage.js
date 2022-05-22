import React from "react";
import styled from "styled-components";
import whaleBG from "../image/loginBG.jpg";
import { PageTitle } from "./../css/component.css";
import LoginForm from "./components/LoginForm";

const BgContainer = styled.div`
  background-image: url(${whaleBG});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export default function LoginPage() {
  return (
    <BgContainer>
      <PageTitle>Worries Go Away</PageTitle>
      <LoginForm></LoginForm>
    </BgContainer>
  );
}
