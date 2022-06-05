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
//   },
//   {
//     id: 2,
//     title: "用於定義每一個網格項目的名稱",
//     rating: "3",
//     createDate: "2022/05/23",
//     tag: "life",
//     animal:`${whaleBG}`,
//     timePass:'15hr'
//   },
//   {
//     id: 3,
//     title: "Title3",
//     rating: "4",
//     createDate: "2022/05/23",
//     tag: "life",
//     animal:`${whaleBG}`,
//     timePass:'15hr'
//   },
//   {
//     id: 4,
//     title: "Title4",
//     rating: "5",
//     createDate: "2022/05/23",
//     tag: "life",
//     animal:`${whaleBG}`,
//     timePass:'15hr'
//   },
// ];



export default function ListPage() {
  // const list = useSelector((state) => state.list.value);
  // console.log("list",list);
  const [notes, setNotes] = useState([]);
  const currentUser=useAuthUser()
  console.log("uid:",currentUser,currentUser.currentUser.uid);

  useEffect(() => {
    console.log("test");
    const q = query(collection(db, "notes"), where("author", "==", currentUser.currentUser.uid));
    const notesDB=[]
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notesDB.push(doc.data());
      });
      setNotes(...notes, notesDB);
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
