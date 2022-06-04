import React, { useEffect, useState } from "react";
import AnimalBG from "./components/AnimalBG";
import Note from "./components/Note";
import styled from "styled-components";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase";


const ShowNoteWrapper = styled.div`
  background-color: aliceblue;
  position: relative; 
  width: 100%; 
  margin: 0 auto;
  height: 150vh;
  overflow: hidden;
`;

export default function ShowNotePage() {
  const showItemID = localStorage.getItem("showItemID");
  console.log("showItemID:", showItemID);
  localStorage.clear();
  console.log("showItemID2:", showItemID);

  const [note, setNote] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notes"), where("id", "==", showItemID));
    getDocs(q).then((querySnapshot) =>
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setNote(...note, doc.data());
      })
    );
  }, []);
  return (
    <ShowNoteWrapper>
      <AnimalBG BG={note.animalName}></AnimalBG>
      <Note note={note}></Note>
    </ShowNoteWrapper>
  );
}
