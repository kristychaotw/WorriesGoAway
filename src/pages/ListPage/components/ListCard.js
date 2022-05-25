import React from "react";
import { StyledCard, H3, TagBox, RateBox } from "../../../components/styles/component.css";
import StaticRating from "./StaticRating";

export default function ListCard({
  item: { id, title, rating, createDate, tag, animal, timePass },
}) {
  return (
    <StyledCard>
      <H3>{title}</H3>
      <TagBox>{tag}</TagBox>
      <img src={animal}></img>
      <p>
        {createDate} ‧ Has Been Passed : {timePass}
      </p>
      <RateBox><StaticRating rate={rating}></StaticRating></RateBox>
    </StyledCard>
  );
}
