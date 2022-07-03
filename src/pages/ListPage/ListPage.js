import React, { useState, useEffect, useContext } from "react";
import ListCard from "./components/ListCard";
import { PageTitle, MsgHint } from "../../components/styles/component.css";
import styled from "styled-components";
import db, { useAuthUser } from "../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import moment from "moment";
import { nanoid } from "@reduxjs/toolkit";
import { motion } from "framer-motion";
import { FMContextVar, FMContextTrans } from "../App";
import FilterBar from "./components/FilterBar";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-template-areas:
    ". bar bar bar"
    ". subBar subBar subBar"
    ". nlist nlist nlist";
  width: 85%;
  max-width: 1200px;
  margin: 60px auto;
  margin-right: 90px;
  margin-top: 230px;
  padding-bottom: 120px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "bar"
      "subBar"
      "nlist";
    margin-right: auto;
    margin-top: auto;
  }
`;

export const ContentWrapper = styled.div`
  grid-area: nlist;
`;

export default function ListPage() {
  const pageVariants = useContext(FMContextVar);
  const pageTransition = useContext(FMContextTrans);
  const [notes, setNotes] = useState([]);
  const currentUser = useAuthUser().currentUser;
  const [originalNotes, setOriginalNotes] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "notes"),
      where("author", "==", currentUser.uid)
    );
    const notesDB = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newdoc = { ...doc.data(), docID: doc.id };
        notesDB.push(newdoc);
      });
      const sortNote = notesDB.sort((a, b) =>
        moment(a.createDate).format() > moment(b.createDate).format() ? -1 : 1
      );
      setOriginalNotes(...originalNotes, sortNote);
      setNotes(...notes, sortNote);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <PageTitle>
        <h3>My Note List</h3>
        <p>Choose one note to see your animal timer</p>
      </PageTitle>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <GridContainer>
          <FilterBar
            setNotes={setNotes}
            originalNotes={originalNotes}
            notes={notes}
          />
          <ContentWrapper>
            {notes.map((note) => {
              return <ListCard key={nanoid()} note={note}></ListCard>;
            })}
            {!notes.length && (
              <MsgHint>
                Oops! Your list is empty. Go add at least one note.
              </MsgHint>
            )}
          </ContentWrapper>
        </GridContainer>
      </motion.div>
    </>
  );
}
