import React from "react";
import { StyledCard } from "../../../components/styles/component.css";
import { StyledGrid } from "../../../components/styles/component.css";
import StaticRating from "./StaticRating";
import { TagButton } from "../../../components/styles/note.css";
export default function ListCard({ item: { id, title, rating, createDate, tag } }) {
  return (
    <StyledCard>
      <StyledGrid>
        <div>
          <TagButton key={id} disabled>{tag}</TagButton>
        </div>
        <div>
          <h3>{title}</h3>
          <p>CreateDate: {createDate}</p>
          <StaticRating rate={rating}></StaticRating>
        </div>
      </StyledGrid>
    </StyledCard>
  );
}
