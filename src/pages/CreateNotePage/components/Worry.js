import React from "react";
import { TextAreaBox } from "../../../components/styles/note.css";
import { useSelector } from "react-redux";

export default function Worry(props) {
  const formContent = useSelector((state) => state.form.value);

  return (
    <>
      <TextAreaBox
        required
        grid={"content"}
        name="worry"
        onChange={(e) => props.newWorry(e.target.value)}
        placeholder="Write down your thoughts"
        rows={5}
        value={formContent.worry}
      ></TextAreaBox>
    </>
  );
}
