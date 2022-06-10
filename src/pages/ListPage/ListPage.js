import React, { useState, useEffect } from "react";
import ListCard from "./components/ListCard";
import { PageTitle } from "../../components/styles/component.css";
import styled from "styled-components";
import db, { useAuthUser } from "../../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
import moment from "moment";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-template-areas: ". list list list";
  width: 85%;
  max-width: 1200px;
  margin: 60px auto;
  margin-right: 90px;
  margin-top: 230px;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas: "list";
    margin-right: auto;
    margin-top: auto;
  }
`;

const ContentWrapper = styled.div`
  grid-area: list;
`;

// const content = [
// {
//   "author": "t5c05Gm68QQpSv3HLyvI5XdCcca2",
//   "animalName": "whale",
//   "title": "11111",
//   "tag": "Wealth",
//   "isStored": false,
//   "error": "",
//   "id": "SwxMboP9yYe9Q83V4kpSN",
//   "animal": "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M19.267 19.326C20.4911 18.2443 21.4856 16.9279 22.1916 15.4547C22.8976 13.9816 23.3007 12.3818 23.377 10.75V1.75C22.5814 1.75 21.8183 2.06607 21.2557 2.62868C20.6931 3.19129 20.377 3.95435 20.377 4.75C20.3808 4.8976 20.3958 5.04469 20.422 5.19C19.9685 4.912 19.449 4.76024 18.9171 4.75041C18.3853 4.74058 17.8605 4.87304 17.3971 5.13409C16.9336 5.39513 16.5483 5.77528 16.2811 6.2352C16.0138 6.69511 15.8743 7.21808 15.877 7.75H18.377C19.0401 7.75 19.6759 8.01339 20.1448 8.48223C20.6136 8.95107 20.877 9.58696 20.877 10.25C20.877 10.913 20.6136 11.5489 20.1448 12.0178C19.6759 12.4866 19.0401 12.75 18.377 12.75H6.87702C4.82754 12.785 2.8049 13.2222 0.924015 14.037C0.862459 14.0637 0.806899 14.1025 0.760645 14.1511C0.714391 14.1996 0.678388 14.257 0.654781 14.3198C0.631174 14.3826 0.620446 14.4495 0.623235 14.5166C0.626024 14.5836 0.642273 14.6494 0.671015 14.71C2.70002 18.987 7.20002 22.25 11.877 22.25C13.8336 22.2674 15.7559 21.7364 17.426 20.717' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M1.53491 16.25H5.46091C5.99311 16.2515 6.51969 16.3589 7.00988 16.5662C7.50008 16.7734 7.94406 17.0763 8.31591 17.457C9.66818 18.811 11.4673 19.6261 13.3769 19.75' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M14.377 17.25C14.6991 18.4411 15.4014 19.4945 16.377 20.25C17.4407 20.8464 18.6887 21.0247 19.877 20.75L18.377 17.25' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M10.127 15.25C10.1933 15.25 10.2568 15.2763 10.3037 15.3232C10.3506 15.3701 10.377 15.4337 10.377 15.5' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M9.87695 15.5C9.87695 15.4337 9.90329 15.3701 9.95018 15.3232C9.99706 15.2763 10.0606 15.25 10.127 15.25' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M10.127 15.75C10.0606 15.75 9.99706 15.7237 9.95018 15.6768C9.90329 15.6299 9.87695 15.5663 9.87695 15.5' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M10.377 15.5C10.377 15.5663 10.3506 15.6299 10.3037 15.6768C10.2568 15.7237 10.1933 15.75 10.127 15.75' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M3.37695 4.75C3.37695 4.08696 3.64034 3.45107 4.10919 2.98223C4.57803 2.51339 5.21391 2.25 5.87695 2.25C6.53999 2.25 7.17588 2.51339 7.64472 2.98223C8.11356 3.45107 8.37695 4.08696 8.37695 4.75' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M13.377 4.75C13.377 4.08696 13.1136 3.45107 12.6447 2.98223C12.1759 2.51339 11.54 2.25 10.877 2.25C10.2139 2.25 9.57803 2.51339 9.10919 2.98223C8.64035 3.45107 8.37695 4.08696 8.37695 4.75V10.75' stroke='%235085A5' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e",
//   "worry": "22222222222",
//   "createDate": "Sat Jun 04 2022 00:31:13 GMT+0800 (Taipei Standard Time)",
//   "rating": 1
// }]

export default function ListPage() {
  // const list = useSelector((state) => state.list.value);
  // console.log("list",list);
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
        // notesDB.push(doc.data());
        const newdoc = { ...doc.data(), docID: doc.id };
        notesDB.push(newdoc);
      });

      setNotes(...notes, notesDB);
    });
    return unsubscribe;
  }, []);

  const sortNote = notes.sort((a, b) =>
    moment(a.createDate).format() > moment(b.createDate).format() ? -1 : 1
  );

  // function setDefaultNote() {
  //   const defaultNoteID=sortNote[0].docID;
  //   console.log("ddd",defaultNoteID);
  //   localStorage.setItem("defaultNoteID:", defaultNoteID);
  // }

  return (
    <>
      <PageTitle>My Note List</PageTitle>
      <GridContainer>
        <ContentWrapper>
          {sortNote.map((note, index) => {
            return <ListCard key={index} note={note}></ListCard>;
          })}
        </ContentWrapper>
      </GridContainer>
    </>
  );
}
