import { AppContainer } from "../../components/styles/container.css"
import React, { useReducer } from "react";
import Tags from "./components/Tags";
import StressRating from "./components/StressRating";
import Keyword from "./components/Keyword";
import Worry from "./components/Worry";
import { BtnSubmit, PageTitle } from "../../components/styles/component.css";


export default function CreateNotePage() {
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
    <AppContainer>
      <PageTitle>Create A Note</PageTitle>
      <StressRating newRate={(value) => updateNote({ stressRating: value })} />
      <Tags newTag={(value) => updateNote({ tag: value })} />
      <Keyword newKeyword={(value) => updateNote({ keyword: value })} />
      <Worry newWorry={(value) => updateNote({ worry: value })} />
      <BtnSubmit
        onClick={() => {
          dispatch({ type: "updateNote" });
        }}
      >
        Submit
      </BtnSubmit>
      <p>Current result is {JSON.stringify(state)}</p>
    </AppContainer>
  );
}
