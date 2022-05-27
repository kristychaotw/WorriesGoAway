import React from "react";
import AnimalBG from "./components/AnimalBG";
import Note from "./components/Note";
import styled from "styled-components";

const ShowNoteWrapper = styled.div`
  background-color: aliceblue;
  position: relative; 
  width: 100%; 
  margin: 0 auto;
  height: 150vh;
`;

export default function ShowNotePage() {
  return (
    <ShowNoteWrapper>
      <AnimalBG></AnimalBG>
      <Note></Note>
    </ShowNoteWrapper>
  );
}
