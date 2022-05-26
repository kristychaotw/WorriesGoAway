import React from 'react'
import styled from "styled-components";

const SendBtn = styled.div`
padding: 5px 10px;
  margin: 10px;
  margin-bottom: 180px;
  border: none;
  border-radius: 10px;
  background: #5085a5;
  color: #fcfcfc;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl};
  box-shadow: 1px 1px 2px 0px hsla(0, 0%, 0%, 0.25);
  display: inline-block;

  &:hover {
    background-color: #587b90;
  }

  &:active {
    background-color: #afdae3;
    color: #f0f0f0;
  }
`

export default function SubmitNote() {
  return (
    <SendBtn
    onClick={() => {
      dispatch({ type: "updateNote" });
    }}
  >
    Send
  </SendBtn>
  )
}
