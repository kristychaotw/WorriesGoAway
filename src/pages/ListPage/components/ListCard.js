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
import moment from "moment";

export default function ListCard({
  item: { id, title, rating, createDate, tag, animal, timePass,docID },
}) {
  let createDateFormat;
  if (createDate != null) {
    createDateFormat = moment(createDate).format("MMM Do YY");
  }

  function handleClick(e) {
    console.log("e",e);
    localStorage.setItem("showItemID", e);
  }

  return (
    <StyledCardWrapper onClick={() => handleClick(docID)}>
      <Link to="/Whale">
        <StyledCard>
          <H3>{title}</H3>
          <TagBox>{tag}</TagBox>
          <img src={animal}></img>
          <p>
            {createDateFormat}
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
