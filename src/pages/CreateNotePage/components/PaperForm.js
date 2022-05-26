import React, { useReducer } from "react";
import Tags from "./Tags";
import StressRating from "./StressRating";
import NoteTitle from "./NoteTitle";
import Worry from "./Worry";
import Stamp from "./Stamp";
import { TitleLable, FormWrapper } from "../../../components/styles/note.css";

export default function PaperForm() {
  const noteInitialState = {
    tag: "",
    keyword: "",
    stressRating: "",
    worry: "",
    animal: "",
    createDay: Date(),
    error: "",
    isStored: false,
  };
  function submitReducer(state, action) {
    // console.log('action:',action);
    switch (action.type) {
      case "updateNote":
        return {
          ...state,
          [action.key]: action.value,
        };
      case "successCreateNote":
        return {
          ...state,
          isStored: true,
        };
      case "failtoCreateNote":
        return {
          ...state,
          error: "failed to store in db",
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(submitReducer, noteInitialState);

  function updateNote(object) {
    // console.log('object:',object,'object-key:',Object.keys(object)[0],'O-value:',Object.values(object)[0]);
    dispatch({
      type: "updateNote",
      key: Object.keys(object)[0],
      value: Object.values(object)[0],
    });
  }

  return (
    <>
      <FormWrapper>
        <Stamp />
        <TitleLable grid={"trate"}>Rate your stress</TitleLable>
        <StressRating>
          grid={"rate"}
          newRate={(value) => updateNote({ stressRating: value })}
        </StressRating>
        <TitleLable grid={"ttitle"}>Title</TitleLable>
        <NoteTitle newKeyword={(value) => updateNote({ keyword: value })} />
        <TitleLable grid={"ttag"}>Tags</TitleLable>
        <Tags newTag={(value) => updateNote({ tag: value })} />
        <TitleLable grid={"tcontent"}>Content</TitleLable>
        <Worry newWorry={(value) => updateNote({ worry: value })} />
      </FormWrapper>
    </>
  );
}
