import React, { useEffect, useState } from "react";
import AnimalBG from "./components/AnimalBG";
import Note from "./components/Note";
import styled from "styled-components";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import db from "../../firebase";
import EndBtn from "./components/EndBtn";

const ShowNoteWrapper = styled.div`
  background-color: aliceblue;
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  position: absolute;
  right: 60px;
  top: 160px;
  width: 50%;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
  } ;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 80%;
  }
`;

export default function ShowNotePage() {
  const selectedNoteID = localStorage.getItem("showItemID");
  const lastCreated = localStorage.getItem("lastCreated");

  console.log("selectedNoteID:", selectedNoteID);

  const [note, setNote] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "notes", selectedNoteID);
    getDoc(docRef)
      .then((docSnap) => {
        console.log("Document data:", docSnap.data());
        setNote(...note, docSnap.data());
      })
      .catch(() => {
        console.log("No such document!");
      });
  }, []);

  return (
    <ShowNoteWrapper>
      <ContentWrapper>
        <Note note={note}></Note>
        <EndBtn noteID={selectedNoteID} />
      </ContentWrapper>
      <AnimalBG BG={note.animalName}></AnimalBG>
    </ShowNoteWrapper>
  );
}
