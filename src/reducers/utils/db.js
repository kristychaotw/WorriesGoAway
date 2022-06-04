import { useSelector, useDispatch } from "react-redux";
import { updateNote, saveNote, failtoSaveNote } from "../form";
import  { makeRequest, getList, error } from "../list"
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import db from "../../firebase";

// const dispatch = useDispatch();
export default async function SaveNote(content) {
  //   const formContent = useSelector((state) => state.form.value);
  console.log("content:", content);
  try {
    const docRef = await addDoc(collection(db, "notes"), content);
    console.log("Document written with ID: ", docRef.id);
    // dispatch(saveNote());
  } catch (e) {
    console.error("Error adding document: ", e);
    // dispatch(failtoSaveNote());
  }

  alert("successfully saved")
}

