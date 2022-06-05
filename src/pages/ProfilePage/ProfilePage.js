import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginr, logoutr,update } from "../../reducers/user";
import { BtnSubmit } from "../CreateNotePage/components/SelectAnimal";
import { useAuthUser, logout } from "../../firebase";
import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 85%;
  max-width: 1200px;
  margin:40px auto;
`;

export default function ProfilePage() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuthUser();

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
      <Container >
        <div>ProfilePage</div>
        {/* <p>Name : {user.name}</p>
        <p>Email : {user.email}</p> */}
        {/* <p>Password:{user.age}</p> */}
        
        <BtnSubmit
          disabled={loading || !currentUser}
          onClick={() => handleLogout()}
        >
          Log Out
        </BtnSubmit>
      </Container>
    </>
  );
}
