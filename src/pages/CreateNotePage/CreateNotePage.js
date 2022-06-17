import React, { useState } from "react";
import styled from "styled-components";
import SelectAnimal from "./components/SelectAnimal";
import Form from "./components/Form";
import { MsgHint, PageTitle } from "../../components/styles/component.css";
import { SendBtn } from "../../components/styles/note.css";
import { useDispatch, useSelector } from "react-redux";
import SaveNote from "../../reducers/utils/dbNote";
import Modal from "../../components/Modal";
import { openModal } from "../../reducers/modal";
import { clearUpNote, saveNote, updateNote } from "../../reducers/form";
import { useEffect } from "react";
import moment from "moment";

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
  const modalState = useSelector((state) => state.modal.value);
  const formContent = useSelector((state) => state.form.value);
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendBtn, setSendBtn] = useState(false);
  let time = moment().format();

  function handleSendBtn(e) {
    setSendBtn(false);
    if (e.animal === "") {
      setHint("Fill out ANIMAIL STAMP by clicking PICK");
    } else if (e.rating === "") {
      setHint("Fill out RATING");
    } else if (e.tag === "") {
      setHint("Fill out TAG");
    } else if (e.title === "") {
      setHint("Fill out TITLE");
    } else if (e.worry === "") {
      setHint("Fill out CONTENT");
    } else if (e.createDate === "default") {
      dispatch(updateNote({ createDate: moment().format() }));
      setHint("try to change");
    } else {
      setHint("");
      setSendBtn(true);
      sendFormContent();
    }
  }

  function sendFormContent() {
    setLoading(true);
    SaveNote(formContent)
      .then((e) => {
        dispatch(openModal({ show: true, headlines: "Success", msg: e }));
        dispatch(saveNote());
      })
      .catch((e) =>
        dispatch(openModal({ show: true, headlines: "Failed", msg: e }))
      );
    setLoading(false);
    setSendBtn(false);
  }

  useEffect(() => {
    dispatch(clearUpNote());
    dispatch(updateNote({ createDate: time }));
  }, [formContent.isComplete]);

  useEffect(() => {
    setTimeout(() => {
      time;
    }, 1000);
  });

  return (
    <div onLoad={() => dispatch(updateNote({ createDate: time }))}>
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
        <MsgHint grid={"msg"}>{hint}</MsgHint>
      </GridContainer>
    </div>
  );
}
