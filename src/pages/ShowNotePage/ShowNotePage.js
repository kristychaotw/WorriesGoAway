import React, { useEffect, useState } from "react";
import AnimalBG from "./components/AnimalBG";
import Note from "./components/Note";
import styled from "styled-components";
import { collection, query, where, getDocs } from "firebase/firestore";
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
  const showItemID = localStorage.getItem("showItemID");
  const defaultNote=localStorage.getItem("defaultNote");
  const lastCreated=localStorage.getItem("lastCreated");

  console.log("showItemID:", showItemID);
  // localStorage.clear();
  // localStorage.removeItem('showItemID');
  console.log("defaultNote:", defaultNote);

  const [note, setNote] = useState([]);
  
  let renderNote;
  function renderNotef(){
    if(showItemID){
      renderNote=showItemID
    }else if (defaultNote){
      renderNote=defaultNote
    }else if (lastCreated){
      renderNote=lastCreated
    }else{
      renderNote=renderNote
    }
  }


  useEffect(() => {
    const q = query(collection(db, "notes"), where("id", "==", renderNote));
    getDocs(q).then((querySnapshot) =>
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setNote(...note, doc.data());
      })
    );
  }, []);
  return (
    <ShowNoteWrapper onLoad={renderNotef()}>
      <AnimalBG BG={note.animalName}></AnimalBG>
      <Note note={note}></Note>
      <EndBtn/>
    </ShowNoteWrapper>
  );
}
