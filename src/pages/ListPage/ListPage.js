import React, { useState,useEffect } from "react";
import ListCard from "./components/ListCard";
import { PageTitle } from "../../components/styles/component.css";
import styled from "styled-components";
import { useAuthUser } from "../../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  orderBy 
} from "firebase/firestore";
import db from "../../firebase";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-template-areas: ". list list list";
  width: 85%;
  max-width: 1200px;

  margin: 60px auto;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas: "list";
  }
`;

const ContentWrapper = styled.div`
  grid-area: list;
`;

// const content = [
//   {
//     id: 1,
//     title: "Title",
//     rating: "5",
//     createDate: "2022/05/23",
//     tag: "life",
//     animal:`${whaleBG}`,
//     timePass:'15hr'
//   }]



export default function ListPage() {
  // const list = useSelector((state) => state.list.value);
  // console.log("list",list);
  const [notes, setNotes] = useState([]);
  const currentUser=useAuthUser().currentUser
  console.log("uid:",currentUser,currentUser.uid);

  useEffect(() => {
    const q = query(collection(db, "notes"),where("author", "==", currentUser.uid), orderBy("createDate","desc"));
    const notesDB=[]
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notesDB.push(doc.data());
      });
      setNotes(...notes, notesDB);
      localStorage.setItem("defaultNote:",notesDB[0].id)
    });
    return unsubscribe;
  }, []);

  return (
    <>
    {console.log("notes:",notes)}
      <PageTitle>My Note List</PageTitle>
      <GridContainer>
        <ContentWrapper>
          {notes.map((item, index) => {
            return <ListCard key={index} item={item}></ListCard>;
          })}
        </ContentWrapper>
      </GridContainer>
    </>
  );
}
