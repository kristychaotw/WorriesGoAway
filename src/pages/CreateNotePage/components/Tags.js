import React, { useState } from "react";
import { TitleLable } from "../../../components/styles/component.css";
import { TagButton } from "../../../components/styles/note.css";

export default function Tags(props) {
  const tags = ["Life", "Wealth", "Health", "Love", "Relationship", "Others"];
  const [tagActive, setTagActive] = useState(tags[0]);

  function handleToggle(currentTag) {
    setTagActive(currentTag);
    props.newTag(currentTag);
  }

  return (
    <>
      <TitleLable>Tags</TitleLable>
      <div>
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
      </div>
      {/* <p>Tag you chosed: {tagActive}</p> */}
    </>
  );
}
