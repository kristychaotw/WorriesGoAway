import React, { useState } from "react";
import SelectAnimal from "./components/SelectAnimal";
import Form from "./components/Form";
import { PageTitle } from "../../components/styles/component.css";
import { SendBtn } from "../../components/styles/note.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SaveNote from "../../reducers/utils/dbNote";
import Modal from "../../components/Modal";
import { openModal } from "../../reducers/modal";
import { clearUpNote } from "../../reducers/form";

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
  z-index: 11;
  padding-bottom: 120px;

  p {
    grid-area: msg;
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "picker picker"
      "form form"
      "send msg";
    margin-right: auto;
    margin-top: auto;
  }
`;

export default function CreateNotePage() {
  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.form.value);
  const modalState = useSelector((state) => state.modal.value);
  const [hint, setHint] = useState("All Fields");
  const [loading, setLoading] = useState(false);
  const [sendBtn, setSendBtn] = useState(false);

  function handleSendBtn(e) {
    console.log("e", e);
    setSendBtn(false);
    if (e.animal === "") {
      setHint("ANIMAIL STAMP by clicking PICK");
    } else if (e.rating === "") {
      setHint("RATING");
    } else if (e.tag === "") {
      setHint("TAG");
    } else if (e.title === "") {
      setHint("TITLE");
    } else if (e.worry === "") {
      setHint("CONTENT");
    } else {
      setHint("All Done, ready to send");
      setSendBtn(true);
      sendFormContent()
    }
  }

  function sendFormContent() {
    setLoading(true);
    SaveNote(formContent)
      .then((e) =>
        dispatch(openModal({ show: true, headlines: "Success", msg: e }))
      )
      .catch((e) =>
        dispatch(openModal({ show: true, headlines: "Failed", msg: e }))
      );
    setLoading(false);
    setSendBtn(false);
    dispatch(clearUpNote())
    setHint("All Fields");
  }

  return (
    <>
      {modalState.show && <Modal />}
      <PageTitle>Add A New Note </PageTitle>
      <GridContainer>
        <SelectAnimal></SelectAnimal>
        <Form></Form>
        <SendBtn
          disabled={loading || sendBtn}
          grid={"send"}
          onClick={() => handleSendBtn(formContent)}
        >
          Send
        </SendBtn>
        <p>Fill out {hint}</p>
      </GridContainer>
    </>
  );
}
