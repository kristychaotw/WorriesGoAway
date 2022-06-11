import React, { useState } from "react";
import SelectAnimal from "./components/SelectAnimal";
import Form from "./components/Form";
import { PageTitle } from "../../components/styles/component.css";
import { SendBtn } from "../../components/styles/note.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, saveNote, failtoSaveNote,clearUpNote } from "../../reducers/form";
import SaveNote from "../../reducers/utils/dbNote";

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

  p {
    grid-area: msg;
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "picker"
      "form"
      "send"
      "msg";
    margin-right: auto;
    margin-top: auto;
  }
`;

export default function CreateNotePage() {
  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.form.value);

  const [hint, setHint] = useState("ALL FIELDS");

  function handleSendBtn(e) {
    console.log(e);

    if (e.animal === "") {
      handleHint("ANIMAIL");
    }  else if (e.rating === "") {
      handleHint("RATING");
    } else if (e.tag === "") {
      handleHint("TAG");
    }else if (e.title === "") {
      handleHint("TITLE");
    } else if (e.worry === "") {
      handleHint("CONTENT");
    } else {
      SaveNote(formContent)
      // dispatch(clearUpNote())
    }
  }

  function handleHint(hint) {
    setHint(hint);
  }

  return (
    <>
      <PageTitle>Add A New Note </PageTitle>
      <GridContainer>
        <SelectAnimal></SelectAnimal>
        <Form></Form>
        <SendBtn grid={"send"} onClick={() => handleSendBtn(formContent)}>
          Send
        </SendBtn>
        <p>Fill out {hint} before you send it</p>
      </GridContainer>
    </>
  );
}
