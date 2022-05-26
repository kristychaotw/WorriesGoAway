import React, { useState } from "react";
import { TagButton,TagBox } from "../../../components/styles/note.css";

export default function Tags(props) {
  const tags = ["Life", "Wealth", "Health", "Love", "Relationship", "Others"];
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
              key={tag}
              onClick={() => handleToggle(tag)}
            >
              {tag}
            </TagButton>
          );
        })}
      {/* <p>Tag you chosed: {tagActive}</p> */}
      </TagBox>
  );
}
