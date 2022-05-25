import React from "react";
import ListCard from "./components/ListCard";
import whaleBG from "../../components/images/icons/whale.svg" 
import { H2 } from "../../components/styles/component.css";

const content = [
  {
    id: 1,
    title: "Title",
    rating: "5",
    createDate: "2022/05/23",
    tag: "life",
    animal:`${whaleBG}`,
    timePass:'15hr'
  },
  {
    id: 2,
    title: "用於定義每一個網格項目的名稱",
    rating: "3",
    createDate: "2022/05/23",
    tag: "life",
    animal:`${whaleBG}`,
    timePass:'15hr'
  },
  {
    id: 3,
    title: "Title3",
    rating: "4",
    createDate: "2022/05/23",
    tag: "life",
    animal:`${whaleBG}`,
    timePass:'15hr'
  },
  {
    id: 4,
    title: "Title4",
    rating: "5",
    createDate: "2022/05/23",
    tag: "life",
    animal:`${whaleBG}`,
    timePass:'15hr'
  },
];

export default function ListPage() {
  return (
    <div>
      <H2>My Note List</H2>
      <div>
        {content.map((item, index) => {
          return <ListCard key={index} item={item}></ListCard>;
        })}
      </div>
    </div>
  );
}
