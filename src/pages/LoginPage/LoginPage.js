import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import whaleBG from "../../../src/components/images/loginBG.jpg";
import { WebTitle } from "../../components/styles/component.css";
import Cover from "./components/Cover";
import LoginForm from "./components/LoginForm";
import ScrollDown from "./components/ScrollDown";
import { useAuthUser } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FMContextVar, FMContextTrans } from "../App";

const BgContainer = styled.div`
  background-image: url(${whaleBG});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

export default function LoginPage() {
  const pageVariants = useContext(FMContextVar);
  const pageTransition = useContext(FMContextTrans);
  const currentUser = useAuthUser().currentUser;
  const nav = useNavigate();

  useEffect(() => {
    if (currentUser) nav("/home");
  }, [currentUser]);

  return (
    <>
      <BgContainer>
        <WebTitle>Worry Note</WebTitle>
        <LoginForm />
      </BgContainer>
      <ScrollDown />
      <Cover />
    </>
  );
}
