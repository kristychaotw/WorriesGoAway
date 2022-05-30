import React from "react";
import ListCard from "./components/ListCard";
import whaleBG from "../../components/images/icons/whale.svg" 
import { PageTitle } from "../../components/styles/component.css";
import styled from "styled-components";


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-template-areas: ". list list list";
  width: 85%;
  margin: 60px auto;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "list"
     
  }
`;

const ContentWrapper= styled.div`
grid-area: list;`

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
    <>
      <PageTitle>My Note List</PageTitle>
      <GridContainer>
        <ContentWrapper>
        {content.map((item, index) => {
          return <ListCard key={index} item={item}></ListCard>;
        })}
        </ContentWrapper>
      </GridContainer>
    </>
  );
}
