import React, { useEffect, useState } from "react";
import AnimalBG from "./components/AnimalBG";
import Note from "./components/Note";
import styled from "styled-components";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../../firebase";
import EndBtn from "./components/EndBtn";
import { PageTitle } from "../../components/styles/component.css";

const ShowNoteWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 130vh;
`;

const ContentWrapper = styled.div`
  position: absolute;
  right: 60px;
  top: 160px;
  width: 50%;
  z-index: 10;
  padding-bottom: 100px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 70%;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 80%;
  }
`;

export default function ShowNotePage() {
  const selectedNoteID = localStorage.getItem("showItemID");
  const [note, setNote] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "notes", selectedNoteID);
    const unsub = onSnapshot(docRef, (q) => {
      setNote(...note, q.data());
    });

    return unsub;
  }, []);

  return (
    <ShowNoteWrapper>
      {note ? (
        <>
          <ContentWrapper>
            <Note note={note}></Note>
            {note.endDate ? <></> : <EndBtn noteID={selectedNoteID} />}
          </ContentWrapper>
          <AnimalBG BG={note.animalName}></AnimalBG>
        </>
      ) : (
        <PageTitle>Selecet a note in the list to view its result.</PageTitle>
      )}
    </ShowNoteWrapper>
  );
}
