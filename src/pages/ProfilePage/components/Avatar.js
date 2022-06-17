import React, { useState, useEffect } from "react";
import { useAuthUser } from "../../../firebase";
import styled from "styled-components";
import avatarsvg from "../../../components/images/icons/avatar.svg";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { openModal } from "../../../reducers/modal";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 30px;
  grid-template-areas:
    "avatar"
    "input"
    "uploadbtn";
  justify-items: left;
  margin: 60px 0 40px 0;

  input {
    grid-area: input;
  }
  button {
    grid-area: uploadbtn;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    border-radius: 3px;
    padding: 1px 10px;
    color: #000;
  }
`;

export const StyledAvatar = styled.img`
  vertical-align: middle;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 2px outset #8ba6bc;
  grid-area: avatar;
  object-fit: cover;
  background-color: #fff;
  justify-self: center;
`;

export default function Avatar() {
  const currentUser = useAuthUser().currentUser;
  const [photoFile, setPhotoFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(`${avatarsvg}`);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal.value);

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  }

  const handleUploadBtn = () => {
    const fileRef = ref(storage, currentUser.uid + ".png");
    setLoading(true);
    uploadBytes(fileRef, photoFile)
      .then(() => {
        getDownloadURL(fileRef)
          .then((url) => {
            updateAuthPhotoURL(url);
          })
          .catch((error) => {
            dispatch(
              openModal({
                show: true,
                headlines: "Failed to Upload",
                msg: error.message,
              })
            );
          });
      })
      .catch((error) => {
        dispatch(
          openModal({
            show: true,
            headlines: "Failed to Upload",
            msg: error.message,
          })
        );
      });
    setLoading(false);
  };

  const updateAuthPhotoURL = (url) => {
    setLoading(true);
    updateProfile(currentUser, { photoURL: url })
      .then(() => {
        dispatch(
          openModal({
            show: true,
            headlines: "Success",
            msg: "success to add an photo",
          })
        );
      })
      .catch((error) => {
        dispatch(
          openModal({
            show: true,
            headlines: "Failed",
            msg: error.message,
          })
        );
      });
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser?.photoURL) {
      const newPhoto = currentUser.photoURL;
      setPhotoURL(newPhoto);
    }
  }, [currentUser.photoURL]);

  return (
    <Wrapper>
      {modalState.show && <Modal />}
      <div grid={"input"}>
        <label htmlFor="myfile"></label>
        <input
          type="file"
          id="myfile"
          name="myfile"
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <button disabled={loading || !photoFile} onClick={handleUploadBtn}>
        Upload
      </button>
      <StyledAvatar src={photoURL} />
    </Wrapper>
  );
}
