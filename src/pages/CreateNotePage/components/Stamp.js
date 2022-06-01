import React from "react";
import { Line } from "../../../components/styles/note.css";
import whale from "../../../components/images/icons/whale.svg";
import { useSelector } from "react-redux";


export default function Stamp() {
  const animalIcon=useSelector((state)=>state.stamp.value)

  return (
    <Line>
      {/* <img src={`${whale}`}></img> */}
      {animalIcon.picked? <img src={animalIcon.path}></img>:<></>}
    </Line>
  );
}
