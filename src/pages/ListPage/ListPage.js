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
  getDocs,
  orderBy,
} from "firebase/firestore";
import moment from "moment";

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
  // const list = useSelector((state) => state.list.value);
  // console.log("list",list);
  const [notes, setNotes] = useState([]);
  const currentUser = useAuthUser().currentUser;
  console.log("uid:", currentUser, currentUser.uid);

  useEffect(() => {
    const q = query(
      collection(db, "notes"),
      where("author", "==", currentUser.uid),
      orderBy("createDate", "desc")
    );
    const notesDB = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // notesDB.push(doc.data());
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

  // function setDefaultNote() {
  //   const defaultNoteID=sortNote[0].docID;
  //   console.log("ddd",defaultNoteID);
  //   localStorage.setItem("defaultNoteID:", defaultNoteID);
  // }

  return (
    <>
      <PageTitle>My Note List</PageTitle>
      <GridContainer>
        <ContentWrapper>
          {sortNote.map((note, index) => {
            return <ListCard key={index} note={note}></ListCard>;
          })}
        </ContentWrapper>
      </GridContainer>
    </>
  );
}
