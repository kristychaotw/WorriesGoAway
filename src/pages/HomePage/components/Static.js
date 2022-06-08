import React, { useState, useEffect } from "react";
import { StaticStyled } from "../../../components/styles/component.css";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
import db, { useAuthUser } from "../../../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export default function Static() {
  const [notes, setNotes] = useState([]);
  const currentUser = useAuthUser().currentUser;
  console.log("uid:", currentUser, currentUser.uid);

  useEffect(() => {
    const q = query(
      collection(db, "notes"),
      where("author", "==", currentUser.uid),
      orderBy("createDate", "desc")
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
  console.log("notes:", notes);

  function countNote(notes) {
    noteTotal = notes.length;
    const newNoteList = notes.filter((note) => note.isComplete === true);
    console.log("newNoteList:", newNoteList);
    noteComplete = newNoteList.length;
    noteOngoing = noteTotal - noteComplete;
    return [noteTotal, noteOngoing, noteComplete];
  }

  let [noteTotal, noteOngoing, noteComplete] = countNote(notes);

  function countTags(tag) {
    return notes.filter((note) => note.tag === tag);
  }
  const listLife = countTags("Life");
  const listHealth = countTags("Health");
  const listWealth = countTags("Wealth");
  const listLove = countTags("Love");
  const listSocial = countTags("Social");
  const listOthers = countTags("Others");

  function countStress(list) {
    const stressSum = list.reduce((currentTotal, note) => {
      return note.rating + currentTotal;
    }, 0);
    const stressAvg = Math.round(stressSum / list.length*100)/100;
    return Object.is(stressAvg,NaN)? 'no note':stressAvg;
  }
  const stressAvgTotal = countStress(notes);
  const stressAvgLife = countStress(listLife);
  const stressAvgHealth = countStress(listHealth);
  const stressAvgWealth = countStress(listWealth);
  const stressAvgLove = countStress(listLove);
  const stressAvgSocial = countStress(listSocial);
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
        <h4>
          Life : {listLife.length} StressAvg : {stressAvgLife}
        </h4>
        <h4>
          Wealth : {listWealth.length} StressAvg : {stressAvgWealth}
        </h4>
        <h4>
          Health : {listHealth.length} StressAvg : {stressAvgHealth}
        </h4>
        <h4>
          Love : {listLove.length} StressAvg : {stressAvgLove}
        </h4>
        <h4>
          Social : {listSocial.length} StressAvg : {" "}
          {stressAvgSocial}
        </h4>
        <h4>
          Others :{listOthers.length} StressAvg : {stressAvgOthers}
        </h4>
      </StaticStyled>
      <PieChart />
      <ColumnChart />
    </>
  );
}
