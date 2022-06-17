import React from "react";
import { TitleBox } from "../../../components/styles/note.css";
import { useSelector } from "react-redux";

export default function NoteTitle(props) {
  const formContent = useSelector((state) => state.form.value);

  return (
    <>
      <TitleBox
        required
        grid={"title"}
        name="keyword"
        onChange={(e) => props.newKeyword(e.target.value)}
        placeholder="Write a title"
        type="text"
        value={formContent.title}
      ></TitleBox>
    </>
  );
}
