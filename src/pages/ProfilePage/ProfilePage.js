import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginr, logoutr, update } from "../../reducers/user";
import { useAuthUser, logout } from "../../firebase";
import { H3, PageTitle } from "../../components/styles/component.css";
import { BtnSubmit } from "../CreateNotePage/components/SelectAnimal";
import Avatar from "./components/avatar";
import { Container } from "../../components/styles/container.css";


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
