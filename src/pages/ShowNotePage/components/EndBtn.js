import React, { useState } from "react";
import styled from "styled-components";

const EndBtnStyled = styled.button`
  position: absolute;
  top: 600px;
  left: 60px;
  padding: 5px 10px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  background: #5085a5;
  color: #fcfcfc;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl};
  box-shadow: 1px 1px 2px 0px hsla(0, 0%, 0%, 0.25);
  display: block;
  grid-area: ${({ grid }) => grid};

  &:hover {
    background-color: #587b90;
  }

  &:active {
    background-color: #afdae3;
    color: #f0f0f0;
  }
`;

export default function EndBtn() {
  const [worryState, setWorryState] = useState({
    "worry": true,
    "endtext": "Free this worry",
  });

  const EndText = () => {
    let endState = { "worry": false, "endtext": "Worry Finished" };
    setWorryState(prevState => {
        return {...prevState, ...endState};
      });
  };
  return <EndBtnStyled disabled={!worryState.worry} onClick={EndText}>{worryState.endtext}</EndBtnStyled>;
}
