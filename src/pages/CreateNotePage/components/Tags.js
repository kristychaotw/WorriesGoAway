import React, { useState, useEffect } from "react";
import { TagButton, TagBox } from "../../../components/styles/note.css";
import { useSelector } from "react-redux";

export default function Tags(props) {
  const tags = ["Life", "Work", "Self", "Love", "Social", "Money", "Others"];
  const [tagActive, setTagActive] = useState(tags[0]);
  const formContent = useSelector((state) => state.form.value);

  function handleToggle(currentTag) {
    setTagActive(currentTag);
    props.newTag(currentTag);
  }

  useEffect(() => {
    setTagActive(tags[0]);
  }, [formContent.isComplete]);

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
