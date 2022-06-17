import React, { useEffect } from "react";
import { Line } from "../../../components/styles/note.css";
import { useSelector, useDispatch } from "react-redux";
import { unPick } from "../../../reducers/stamp";

export default function Stamp() {
  const dispatch = useDispatch();
  const animalIcon = useSelector((state) => state.stamp.value);
  const formContent = useSelector((state) => state.form.value);

  useEffect(() => {
    if (formContent.isComplete)
    dispatch(unPick());
  }, [formContent.isComplete]);

  return (
    <Line>{animalIcon.picked ? <img src={animalIcon.path}></img> : <></>}</Line>
  );
}
