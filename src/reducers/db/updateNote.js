import {
  collection,
  addDoc,
  doc, updateDoc
} from "firebase/firestore";
import db from "../../firebase";
import moment from 'moment';


export default async function SaveNote(content) {
  let msg;
  try {
    const docRef = await addDoc(collection(db, "notes"), content);
    msg="successfully saved";
  } catch (e) {
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