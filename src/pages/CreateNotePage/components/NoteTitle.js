import React, { useState } from "react";
import { TitleBox } from "../../../components/styles/note.css";

export default function NoteTitle(props) {
  const [keyword, setKeyword] = useState();
  return (
    <>
      <TitleBox
      required
        grid={"title"}
        name="keyword"
        //   onChange={(e) => setKeyword(e.target.value)}
        onChange={(e) => props.newKeyword(e.target.value)}
        placeholder="Write a title"
        type="text"
      ></TitleBox>
      {/* <p>your kw is {keyword}</p> */}
    </>
  );
}
