import React from "react";
import { Line } from "../../../components/styles/note.css";
import { useSelector } from "react-redux";

export default function Stamp() {
  const animalIcon = useSelector((state) => state.stamp.value);

  return (
    <Line>{animalIcon.picked ? <img src={animalIcon.path}></img> : <></>}</Line>
  );
}
