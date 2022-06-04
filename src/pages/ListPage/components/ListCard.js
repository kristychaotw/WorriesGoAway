import React from "react";
import {
  StyledCardWrapper,
  StyledCard,
  H3,
  TagBox,
  RateBox,
} from "../../../components/styles/component.css";
import StaticRating from "./StaticRating";
import { Link } from "react-router-dom";

export default function ListCard({
  item: { id, title, rating, createDate, tag, animal, timePass },
}) {
  let dateFormat;
  if (createDate != null) {
    let cppyCreateDate = createDate;
    dateFormat = cppyCreateDate.split(" ").slice(1, 4);
  }

  function handleClick(e) {
    localStorage.setItem("showItemID", e);
  }

  return (
    <StyledCardWrapper onClick={() => handleClick(id)}>
      <Link to="/Whale">
        <StyledCard>
          <H3>{title}</H3>
          <TagBox>{tag}</TagBox>
          <img src={animal}></img>
          <p>
            {dateFormat}
            {/* {dateFormat} ‧ Has Been Passed : {timePass} */}
          </p>
          <RateBox>
            <StaticRating rate={rating}></StaticRating>
          </RateBox>
        </StyledCard>
      </Link>
    </StyledCardWrapper>
  );
}
