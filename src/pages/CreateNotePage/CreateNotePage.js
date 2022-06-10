import React from "react";
import SelectAnimal from "./components/SelectAnimal";
import Form from "./components/Form";
import { PageTitle } from "../../components/styles/component.css";
import { SendBtn } from "../../components/styles/note.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, saveNote, failtoSaveNote } from "../../reducers/form";
import SaveNote from "../../../src/reducers/utils/db";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-template-areas: 
  "picker form form form"
  ". send msg msg";
  width: 85%;
  max-width: 1200px;
  margin: 60px auto;
  margin-right: 90px;
  margin-top: 230px;

  p{
    grid-area: msg;
    text-align: left;
  }


  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "picker"
      "form";
    margin-right: auto;
    margin-top: auto;
  }
`;



export default function CreateNotePage() {
  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.form.value);

  return (
    <>
      <PageTitle>Add A New Note </PageTitle>
      <GridContainer>
        <SelectAnimal></SelectAnimal>
        <Form></Form>
        <SendBtn grid={"send"} onClick={() => SaveNote(formContent)}>Send</SendBtn>
      <p>
        Fill out the questions before you send it
      </p>
      </GridContainer>
    </>
  );
}
