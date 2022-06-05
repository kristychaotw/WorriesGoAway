import React, { useState, useEffect } from "react";
import { useAuthUser, upload } from "../../../firebase";
import styled from "styled-components";
import avatarsvg from "../../../components/images/icons/avatar.svg";
import { BtnSubmit } from "../../../components/styles/component.css";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "avatar input"
    "avatar uploadbtn";
`;

export const StyledAvatar = styled.img`
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px outset #8ba6bc;
  grid-area: avatar;
  background-color: #fff;
`;

export default function Avatar() {
  const currentUser = useAuthUser().currentUser;
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(`${avatarsvg}`);

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <Wrapper>
      <input type="file" onChange={handleChange}></input>
      <BtnSubmit
        margin={0}
        grid={"uploadbtn"}
        disabled={loading || !photo}
        onClick={handleClick}
      >
        Upload
      </BtnSubmit>
      <StyledAvatar src={photoURL} />
    </Wrapper>
  );
}
