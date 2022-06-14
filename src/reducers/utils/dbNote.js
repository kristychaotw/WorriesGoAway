import { useSelector, useDispatch } from "react-redux";
import { updateNote, saveNote, failtoSaveNote } from "../form";
import  { makeRequest, getList, error } from "../list"
import {
  collection,
  addDoc,
  doc, updateDoc
} from "firebase/firestore";
import db from "../../firebase";
import moment from 'moment';


// const dispatch = useDispatch();
export default async function SaveNote(content) {
  //   const formContent = useSelector((state) => state.form.value);
  console.log("content:", content);
  let msg;
  try {
    const docRef = await addDoc(collection(db, "notes"), content);
    console.log("Document written with ID: ", docRef.id);
    msg="successfully saved";
    // dispatch(saveNote());
  } catch (e) {
    console.error("Error adding document: ", e);
    // dispatch(failtoSaveNote());
    msg=e;
  }
  return msg;
}

export async function UpdateNoteEndTime(docID){

const noteRef = doc(db, "notes", docID);
try {
  await updateDoc(noteRef, {
    isComplete: true,
    endDate:moment().format()
  });
  return console.log("endtimeupdate success")
} catch (e) {
  alert("Error updating document: ", e);
  return console.log("endtimeupdate failed")
}


}