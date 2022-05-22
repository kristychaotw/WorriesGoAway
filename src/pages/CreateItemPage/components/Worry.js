import React, { useState } from "react";
import styled from "styled-components";
import { TitleLable } from "../../css/component.css";


const TextAreaBox = styled.input`
  font-size: 1em;
  padding: 10px;
  margin: 10px;
  background: #fcfcfc;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color:#8BA6BC;
  }
`;

export default function Worry(props) {
  const [worry, setWorry] = useState();

  return (
    <>
      <TitleLable>Worry</TitleLable>
      <TextAreaBox
        name="worry"
        // onChange={(e) => setWorry(e.target.value)}
        onChange={(e) => props.newWorry(e.target.value)}
        placeholder="Write your worry"
        type="text"
        rows={5}
      ></TextAreaBox>
      {/* <p>your worry:{worry}</p> */}
    </>
  );
}
