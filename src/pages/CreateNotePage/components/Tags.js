import React, { useState } from "react";
import { TagButton, TagBox } from "../../../components/styles/note.css";

export default function Tags(props) {
  const tags = ["Life", "Work", "Self", "Love", "Social", "Money", "Others"];
  const [tagActive, setTagActive] = useState(tags[0]);

  function handleToggle(currentTag) {
    setTagActive(currentTag);
    props.newTag(currentTag);
  }

  return (
    <TagBox grid={"tag"}>
      {tags.map((tag) => {
        return (
          <TagButton
            bgColor={tag === tagActive ? "#8BA6BC" : "#e4e5e9"}
            name={tag}
            key={tag}
            onClick={() => handleToggle(tag)}
          >
            {tag}
          </TagButton>
        );
      })}
    </TagBox>
  );
}
