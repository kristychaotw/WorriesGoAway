import React from "react";
import { H3, TagBox, RateBox } from "../../../components/styles/component.css";
import StaticRating from "../../ListPage/components/StaticRating";
import Stamp from "../../CreateNotePage/components/Stamp";
import styled from "styled-components";
import { StampWrapper } from "../../../components/styles/note.css";

const NoteWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 100vh;
  padding: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 10px 10px 10px;
  box-shadow: 2px 4px 4px 0px #00000040;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  grid-template-areas:
    ". stamp"
    "foreword foreword"
    "rate tag"
    "title title"
    "content content";

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 100%;
    padding: 20px;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    grid-template-areas:
      "stamp"
      "foreword"
      "rate"
      "tag"
      "title"
      "content";
  }
`;

const TextWrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  grid-area: ${({ grid }) => grid};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-top: 20px;
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: start;
`;

export default function Note() {
  return (
    <>
      <NoteWrapper>
        <StampWrapper grid={"stamp"} top={"30px"} right={"-90px"}>
          <Stamp />
        </StampWrapper>
        <H3 grid={"foreword"} padding={"60px"} border={"2px dashed #000"}>
          ... during the time you are worried,
          <br />
          the whale has swimmed for <span>20000 miles</span>
        </H3>
        <TagBox grid={"tag"} align={"start"}>
          tag
        </TagBox>
        <img></img>
        <RateBox grid={"rate"} align={"start"}>
          <StaticRating></StaticRating>
        </RateBox>
        <TextWrapper grid={"title"} fontWeight={600}>
          title
        </TextWrapper>
        <TextWrapper grid={"content"} fontWeight={400}>
          content
        </TextWrapper>
      </NoteWrapper>
      <p>createDate ‧ Has Been Passed : timePass</p>
    </>
  );
}
