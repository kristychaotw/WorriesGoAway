import React, { useState } from "react";
import styled from "styled-components";
import { TitleLable } from "../../../components/styles/component.css";

const Button = styled.button`
padding: 10px;
margin: 10px;
background: #fcfcfc;
border: none;
border-radius: 3px;
color:#8BA6BC;

&:hover{
  background-color: #e4e5e9;
  color: #5185A6;
}

&:active{
  background-color: #8BA6BC;
  color: #f0f0f0;

}
`;

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
            <Button
              key={tag}
              onClick={() => handleToggle(tag)}
            >
              {tag}
            </Button>
          );
        })}
      </div>
      {/* <p>Tag you chosed: {tagActive}</p> */}
    </>
  );
}
