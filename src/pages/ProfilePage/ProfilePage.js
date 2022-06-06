import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginr, logoutr, update } from "../../reducers/user";
import { useAuthUser, logout } from "../../firebase";
import styled from "styled-components";
import { H3, PageTitle } from "../../components/styles/component.css";
import { BtnSubmit } from "../CreateNotePage/components/SelectAnimal";
import Avatar from "./components/avatar";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 60%;
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
  grid-template-areas:
    "email"
    "logout"
    "avatar";
  grid-gap: 40px;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 80%;
  }
`;


export default function ProfilePage() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuthUser().currentUser;

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
    dispatch(logoutr());
  }
  return (
    <>
      <PageTitle>Profile Page</PageTitle>
      <Container>
        {/* <p>Name : {user.name}</p>*/}
        <H3 grid={"email"}>Hello    {currentUser.email} ,</H3>
        {/* <p>Password:{user.age}</p> */}
        <Avatar grid={"avatar"}></Avatar>

        <BtnSubmit
          grid={"logout"}
          disabled={loading || !currentUser}
          onClick={() => handleLogout()}
          >
          Log Out
        </BtnSubmit>
      </Container>
    </>
  );
}
