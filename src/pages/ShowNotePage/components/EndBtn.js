import React, { useState } from "react";
import styled from "styled-components";
import { UpdateNoteEndTime } from "../../../reducers/utils/db";

const BtnWrapper = styled.div`
  display: flex;
`;

const EndBtnStyled = styled.button`
  margin-right: 0;
  justify-content: end;
  height: 60px;
  padding: 5px 10px;
  margin: 10px 0px;
  border: none;
  border-radius: 10px;
  background: #5085a5;
  color: #fcfcfc;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl};
  box-shadow: 1px 1px 2px 0px hsla(0, 0%, 0%, 0.25);

  &:hover {
    background-color: #587b90;
  }

  &:active {
    background-color: #afdae3;
    color: #f0f0f0;
  }
`;

///// 拿到doc的doc.id 傳進去update動作

export default function EndBtn({ noteID }) {
  console.log("noteID", noteID);
  const [loading, setLoading] = useState(false);
  const [worryState, setWorryState] = useState({
    worry: true,
    endtext: "Free this worry",
  });
  const endState = { worry: false, endtext: "Worry Finished" };

  const EndText = () => {
    setLoading(true);
    if (UpdateNoteEndTime(noteID)) {
      setWorryState((prevState) => {
        return { ...prevState, ...endState };
      });
    } else {
      console.log("上傳失敗");
    }
    setLoading(false);
  };
  return (
    <BtnWrapper>
      <EndBtnStyled disabled={loading || !worryState.worry} onClick={EndText}>
        {worryState.endtext}
      </EndBtnStyled>
    </BtnWrapper>
  );
}
