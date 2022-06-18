import React, { useEffect, useState, useContext } from "react";
import AnimalBG from "./components/AnimalBG";
import Note from "./components/Note";
import styled from "styled-components";
import { doc, onSnapshot } from "firebase/firestore";
import EndBtn from "./components/EndBtn";
import { PageTitle, MsgHint } from "../../components/styles/component.css";
import { ContentWrapper, GridContainer } from "../ListPage/ListPage";
import db, { useAuthUser } from "../../firebase";
import { motion } from "framer-motion";
import { FMContextVar, FMContextTrans } from "../App";

const ShowNoteWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

const ContentWrapperShow = styled.div`
  position: absolute;
  right: 60px;
  top: 40px;
  width: 50%;
  max-width: 700px;
  z-index: 10;
  padding-bottom: 30px;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 70%;
    left: 50%;
    transform: translate(-50%, 0%);
    height: 70vh;
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 85%;
  }
`;

export default function ShowNotePage() {
  const pageVariants = useContext(FMContextVar);
  const pageTransition = useContext(FMContextTrans);
  const selectedNoteID = localStorage.getItem("showItemID");
  const [note, setNote] = useState([]);
  const currentUser = useAuthUser().currentUser;

  useEffect(() => {
    if (selectedNoteID) {
      const docRef = doc(db, "notes", selectedNoteID);
      const unsub = onSnapshot(docRef, (q) => {
        if (q.data().author === currentUser.uid) setNote(...note, q.data());
      });
      return unsub;
    }
  }, []);

  return (
    <>
      <PageTitle>My Note</PageTitle>
      <ShowNoteWrapper>
        {note.length !== 0 ? (
          <>
            <motion.div
              style={{ zIndex: "99" }}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ContentWrapperShow>
                <Note note={note}></Note>
              </ContentWrapperShow>
            </motion.div>
            {note.endDate ? <></> : <EndBtn noteID={selectedNoteID} />}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AnimalBG BG={note.animalName}></AnimalBG>
            </motion.div>
          </>
        ) : (
          <>
            <GridContainer>
              <motion.div
                style={{ zIndex: "99" }}
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ContentWrapperShow>
                  <MsgHint>
                    Oops! You didn't select any note. Go list page and select a
                    note.
                  </MsgHint>
                </ContentWrapperShow>
              </motion.div>
            </GridContainer>
          </>
        )}
      </ShowNoteWrapper>
    </>
  );
}
