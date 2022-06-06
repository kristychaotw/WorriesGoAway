import React, { useState, useEffect } from "react";
import { useAuthUser } from "../../../firebase";
import styled from "styled-components";
import avatarsvg from "../../../components/images/icons/avatar.svg";
import { BtnSubmit } from "../../../components/styles/component.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { updateProfile } from "firebase/auth";
import { update } from "../../../reducers/user";
import { useDispatch} from "react-redux";

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
  object-fit: cover;
  background-color: #fff;
`;

export default function Avatar() {
  const currentUser = useAuthUser().currentUser;
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(`${avatarsvg}`);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  const handleClick = () => {
    console.log("testclick");
    const fileRef = ref(storage, currentUser.uid + ".png");
    setLoading(true);
    uploadBytes(fileRef, photo)
      .then(() => {
        getDownloadURL(fileRef)
          .then((url) => {
            setPhotoURL(url);
            handleAuthPhotoURL(url)
            alert("success!");
          })
          .catch((error) => {
            console.log(error.message, "error!");
          });
      })
      .catch((error) => {
        console.log(error.message, "error");
      });
      setLoading(false);
  };

  const handleAuthPhotoURL=(url)=>{
    setLoading(true);
    updateProfile(currentUser, { photoURL: url })
    .then(() => {
      alert("success update!");
    })
    .catch((error) => {
      console.log(error.message, "error when update");
    });
    setLoading(false);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      const newPicture=currentUser.photoURL
      setPhotoURL(currentUser.photoURL);
      dispatch(update({picture:newPicture}))
    }
  }, [photoURL]);


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
