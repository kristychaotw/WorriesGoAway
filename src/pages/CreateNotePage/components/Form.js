import React, { useReducer } from "react";
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

export default function Form() {


  // function updateNote(object) {
  //   console.log(
  //     "object:",
  //     object,
  //     "object-key:",
  //     Object.keys(object)[0],
  //     "O-value:",
  //     Object.values(object)[0]
  //   );
  // dispatch({
  //   type: "updateNote",
  //   key: Object.keys(object)[0],
  //   value: Object.values(object)[0],
  // });

  //   dispatch
  // }

  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.form.value);
  console.log("formContent:", formContent);

  return (
    <>
      <FormWrapper>
        <StampWrapper top={"90px"} right={"-35px"}>
          <Stamp/>
        </StampWrapper>
        <TitleLable grid={"trate"}>Rate your stress</TitleLable>
        <StressRating
          grid={"rate"}
          newRate={(value) => dispatch(updateNote({ stressRating: value }))}
        ></StressRating>
        <TitleLable grid={"ttitle"}>Title</TitleLable>
        <NoteTitle
          newKeyword={(value) => dispatch(updateNote({ keyword: value }))}
        />
        <TitleLable grid={"ttag"}>Tags</TitleLable>
        <Tags newTag={(value) => dispatch(updateNote({ tag: value }))} />
        <TitleLable grid={"tcontent"}>Content</TitleLable>
        <Worry newWorry={(value) => dispatch(updateNote({ worry: value }))} />
      </FormWrapper>
    </>
  );
}
