import React, { useState, useEffect } from "react";
import ListCard from "./components/ListCard";
import { PageTitle } from "../../components/styles/component.css";
import styled from "styled-components";
import db, { useAuthUser } from "../../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import moment from "moment";
import { nanoid } from "@reduxjs/toolkit";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-template-areas: ". list list list";
  width: 85%;
  max-width: 1200px;
  margin: 60px auto;
  margin-right: 90px;
  margin-top: 230px;
  padding-bottom: 120px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas: "list";
    margin-right: auto;
    margin-top: auto;
  }
`;

const ContentWrapper = styled.div`
  grid-area: list;
`;

export default function ListPage() {
  const [notes, setNotes] = useState([]);
  const currentUser = useAuthUser().currentUser;

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

      setNotes(...notes, notesDB);
    });
    return unsubscribe;
  }, []);

  const sortNote = notes.sort((a, b) =>
    moment(a.createDate).format() > moment(b.createDate).format() ? -1 : 1
  );

  return (
    <>
      <PageTitle>My Note List</PageTitle>
      <GridContainer>
        <ContentWrapper>
          {sortNote.map((note) => {
            return <ListCard key={nanoid()} note={note}></ListCard>;
          })}
        </ContentWrapper>
      </GridContainer>
    </>
  );
}
