import React, { useState } from "react";
import { UpdateNoteEndTime } from "../../../reducers/db/updateNote";
import { BtnWrapper, EndBtnStyled } from "../../../components/styles/note.css";

export default function EndBtn({ noteID }) {
  const [loading, setLoading] = useState(false);
  const [worryState, setWorryState] = useState({
    worry: true,
    endtext: "Free from this worry",
  });
  const endState = { worry: false, endtext: "Worry Finished" };

  const clickEndBtn = () => {
    setLoading(true);
    if (UpdateNoteEndTime(noteID)) {
      const newState = (worryState) => {
        return { ...worryState, ...endState };
      };
      setWorryState(newState);
    } else {
    }
    setLoading(false);
  };
  return (
    <BtnWrapper>
      <EndBtnStyled
        disabled={loading || !worryState.worry}
        onClick={clickEndBtn}
      >
        {worryState.endtext}
      </EndBtnStyled>
    </BtnWrapper>
  );
}
