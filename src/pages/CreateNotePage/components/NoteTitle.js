import React from "react";
import { TitleBox } from "../../../components/styles/note.css";

export default function NoteTitle(props) {
  return (
    <>
      <TitleBox
        required
        grid={"title"}
        name="keyword"
        onChange={(e) => props.newKeyword(e.target.value)}
        placeholder="Write a title"
        type="text"
      ></TitleBox>
    </>
  );
}
