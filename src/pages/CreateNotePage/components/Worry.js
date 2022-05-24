import React, { useState } from "react";
import { TitleLable } from "../../../components/styles/component.css";
import { TextAreaBox } from "../../../components/styles/note.css";

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
