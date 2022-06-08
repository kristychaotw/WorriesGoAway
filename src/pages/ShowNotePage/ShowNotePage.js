import React, { useEffect, useState } from "react";
import AnimalBG from "./components/AnimalBG";
import Note from "./components/Note";
import styled from "styled-components";
import { collection, query, where, getDocs,doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import EndBtn from "./components/EndBtn"


const ShowNoteWrapper = styled.div`
  background-color: aliceblue;
  position: relative; 
  width: 100%; 
  margin: 0 auto;
  height: 150vh;
  overflow: hidden;
`;

export default function ShowNotePage() {
  const selectedNoteID = localStorage.getItem("showItemID");
  const lastCreated=localStorage.getItem("lastCreated");

  console.log("selectedNoteID:", selectedNoteID);


  const [note, setNote] = useState([]);
  

  useEffect(() => {

    const docRef = doc(db, "notes", selectedNoteID);
    getDoc(docRef).then((docSnap)=>{
      console.log("Document data:", docSnap.data());
      setNote(...note,docSnap.data())
    }).catch(()=>{
      console.log("No such document!");

    })
  }, []);

  
  return (
    <ShowNoteWrapper>
      <AnimalBG BG={note.animalName}></AnimalBG>
      <Note note={note}></Note>
      <EndBtn noteID={selectedNoteID}/>
    </ShowNoteWrapper>
  );
}
