import React, { useContext } from "react";
import Tags from "./Tags";
import StressRating from "./StressRating";
import NoteTitle from "./NoteTitle";
import Worry from "./Worry";
import Stamp from "./Stamp";
import {
  TitleLable,
  FormWrapper,
  StampWrapper,
} from "../../../components/styles/note.css";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, saveNote, failtoSaveNote } from "../../../reducers/form";

import { AuthContext } from "../../../firebase";
import { nanoid } from "nanoid";

export default function Form() {
  const dispatch = useDispatch();
  const currentUser = useContext(AuthContext).currentUser.uid;
  const formContent = useSelector((state) => state.form.value);
  const id = nanoid();
  localStorage.setItem("lastCreated", id);
  return (
    <>
      <FormWrapper onLoad={() => dispatch(updateNote({ author: currentUser }))}>
        <StampWrapper
          top={90}
          onLoad={() => dispatch(updateNote({ id: id }))}
        >
          <Stamp />
        </StampWrapper>
        <TitleLable grid={"trate"}>Stress Level</TitleLable>
        <StressRating
          grid={"rate"}
          newRate={(value) => dispatch(updateNote({ rating: value }))}
        ></StressRating>
        <TitleLable grid={"ttitle"}>Title</TitleLable>
        <NoteTitle
          newKeyword={(value) => dispatch(updateNote({ title: value }))}
        />
        <TitleLable grid={"ttag"}>Tags</TitleLable>
        <Tags newTag={(value) => dispatch(updateNote({ tag: value }))} />
        <TitleLable grid={"tcontent"}>Content</TitleLable>
        <Worry newWorry={(value) => dispatch(updateNote({ worry: value }))} />
      </FormWrapper>
    </>
  );
}
