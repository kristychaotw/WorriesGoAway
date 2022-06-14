import React, { useState, useEffect } from "react";
import {
  GridBox,
  StaticStyled,
} from "../../../components/styles/component.css";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import db, { useAuthUser } from "../../../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

export default function Static() {
  const [notes, setNotes] = useState([]);
  const currentUser = useAuthUser().currentUser;

  useEffect(() => {
    const q = query(
      collection(db, "notes"),
      where("author", "==", currentUser.uid),
    );
    const notesDB = [];
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notesDB.push(doc.data());
      });
      setNotes(...notes, notesDB);
    });
    return unsubscribe;
  }, []);

  function countNote(notes) {
    noteTotal = notes.length;
    const newNoteList = notes.filter((note) => note.isComplete === true);
    noteComplete = newNoteList.length;
    noteOngoing = noteTotal - noteComplete;
    return [noteTotal, noteOngoing, noteComplete];
  }

  let [noteTotal, noteOngoing, noteComplete] = countNote(notes);

  function countTags(tag) {
    return notes.filter((note) => note.tag === tag);
  }
  const listLife = countTags("Life");
  const listWork = countTags("Work");
  const listSelf = countTags("Self");
  const listLove = countTags("Love");
  const listSocial = countTags("Social");
  const listMoney = countTags("Money");
  const listOthers = countTags("Others");

  function countStress(list) {
    const stressSum = list.reduce((currentTotal, note) => {
      return note.rating + currentTotal;
    }, 0);
    const stressAvg = Math.round((stressSum / list.length) * 100) / 100;
    return Object.is(stressAvg, NaN) ? "no note" : stressAvg;
  }
  const stressAvgTotal = countStress(notes);
  const stressAvgLife = countStress(listLife);
  const stressAvgWork = countStress(listWork);
  const stressAvgSelf = countStress(listSelf);
  const stressAvgLove = countStress(listLove);
  const stressAvgSocial = countStress(listSocial);
  const stressAvgMoney = countStress(listMoney);
  const stressAvgOthers = countStress(listOthers);

  return (
    <>
      <StaticStyled>
        <h3>Notes</h3>
        <h4>Total : {noteTotal}</h4>
        <h4>Ongoing : {noteOngoing} </h4>
        <h4>Complete : {noteComplete}</h4>
      </StaticStyled>
      <StaticStyled>
        <h3>Stress</h3>
        <h4>Average rating: {stressAvgTotal}</h4>
      </StaticStyled>
      <StaticStyled>
        <h3>Tags</h3>
        <GridBox>
          <h4></h4>
          <h5>Notes</h5>
          <p>Stress.Avg</p>
        </GridBox>
        <GridBox>
          <h4>Life : </h4>
          <h5>{listLife.length} </h5>
          <p> {stressAvgLife}</p>
        </GridBox>
        <GridBox>
          <h4>Work : </h4>
          <h5>{listWork.length} </h5>
          <p> {stressAvgWork}</p>
        </GridBox>
        <GridBox>
          <h4>Self : </h4>
          <h5>{listSelf.length} </h5>
          <p> {stressAvgSelf}</p>
        </GridBox>
        <GridBox>
          {" "}
          <h4>Love : </h4>
          <h5>{listLove.length} </h5>
          <p> {stressAvgLove}</p>
        </GridBox>
        <GridBox>
          <h4>Social : </h4>
          <h5>{listSocial.length} </h5>
          <p> {stressAvgSocial}</p>
        </GridBox>
        <GridBox>
          <h4>Money : </h4>
          <h5>{listMoney.length} </h5>
          <p> {stressAvgMoney}</p>
        </GridBox>
        <GridBox>
          <h4>Others :</h4>
          <h5>{listOthers.length} </h5>
          <p> {stressAvgOthers}</p>
        </GridBox>
      </StaticStyled>
      {/* <PieChart /> */}
      {/* <ColumnChart /> */}
    </>
  );
}
