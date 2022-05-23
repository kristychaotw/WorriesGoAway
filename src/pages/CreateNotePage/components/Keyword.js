import React, { useState } from "react";
import styled from "styled-components"
import { TitleLable } from "../../../components/styles/component.css";

const InputBox = styled.input`
font-size: 1em;
padding: 10px;
margin: 10px;
background: #fcfcfc;
border: none;
border-radius: 3px;
::placeholder {
  color:#8BA6BC;
}
`

export default function Keyword(props) {
  const [keyword, setKeyword] = useState();
  return (
    <>
      <TitleLable>Keyword</TitleLable>
      <InputBox
        name="keyword"
        //   onChange={(e) => setKeyword(e.target.value)}
        onChange={(e) => props.newKeyword(e.target.value)}
        placeholder="Write a keyword"
        type="text"
      ></InputBox>
      {/* <p>your kw is {keyword}</p> */}
    </>
  );
}
