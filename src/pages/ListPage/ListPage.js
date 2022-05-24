import React from "react";
import ListCard from "./components/ListCard";
import Nav from "../../components/styles/Nav";

const content = [
  {
    id: 1,
    title: "Title",
    rating: "5",
    createDate: "2022/05/23",
    tag: "life",
  },
  {
    id: 2,
    title: "Title2",
    rating: "3",
    createDate: "2022/05/23",
    tag: "life",
  },
  {
    id: 3,
    title: "Title3",
    rating: "4",
    createDate: "2022/05/23",
    tag: "life",
  },
  {
    id: 4,
    title: "Title4",
    rating: "5",
    createDate: "2022/05/23",
    tag: "life",
  },
];

export default function ListPage() {
  return (
    <div>
      <div>
        {content.map((item, index) => {
          return <ListCard key={index} item={item}></ListCard>;
        })}
      </div>
      <Nav></Nav>
    </div>
  );
}
