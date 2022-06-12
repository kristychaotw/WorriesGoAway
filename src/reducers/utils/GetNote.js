import React, { useEffect, useContext } from "react";
import { makeRequest, getList, error } from "../list";
import { useSelector, useDispatch } from "react-redux";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import db from "../../firebase";
import { useAuthUser } from "../firebase";


export default function GetNote() {
  const dispatch = useDispatch();
  const listcontent = useSelector((state) => state.list.value);
  console.log("listcontent2:", listcontent);
  const notes = [];
  const currentUser = useAuthUser();
  console.log("currentuserinApp:", currentUser);



  useEffect(() => {
    console.log("test");
    dispatch(makeRequest());
    const q = query(collection(db, "notes"), where("author", "!=", null));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notes.push(doc.data());
      });
      console.log("Current notes by authorlogin: ", notes);
      dispatch(getList(notes));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <div>getNote</div>;
      <p>testt{listcontent.notes.map((items) => items)}</p>
      {console.log("listcontent-notes", listcontent.notes)}
    </>
  );
}
