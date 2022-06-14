import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAuthUser, logout } from "../../firebase";
import { H3, PageTitle } from "../../components/styles/component.css";
import Avatar from "./components/avatar";
import { Container } from "../../components/styles/container.css";
import { SendBtn } from "../../components/styles/note.css";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuthUser().currentUser;

  async function handleLogout() {
    setLoading(true);
    logout();
    setLoading(false);
  }
  return (
    <>
      <PageTitle>Profile Page</PageTitle>
      <Container>
        <H3 grid={"email"}>Hello {currentUser.email} ,</H3>
        <Avatar grid={"avatar"}></Avatar>
        <SendBtn
          grid={"logout"}
          disabled={loading || !currentUser}
          onClick={() => handleLogout()}
        >
          Log Out
        </SendBtn>
      </Container>
    </>
  );
}
