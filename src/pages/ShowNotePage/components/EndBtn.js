import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { UpdateNoteEndTime } from "../../../reducers/utils/db";
import {BtnWrapper,EndBtnStyled} from "../../../components/styles/note.css"


///// 拿到doc的doc.id 傳進去update動作

export default function EndBtn({ noteID }) {
  console.log("noteID", noteID);
  const [loading, setLoading] = useState(false);
  const [worryState, setWorryState] = useState({
    worry: true,
    endtext: "Free this worry",
  });
  const endState = { worry: false, endtext: "Worry Finished" };

  const clickEndBtn = () => {
    setLoading(true);
    if (UpdateNoteEndTime(noteID)) {
      const newState = (worryState) => {
        return { ...worryState, ...endState };
      };
      setWorryState(newState);
      console.log("worryState", worryState);
    } else {
      console.log("上傳失敗");
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
