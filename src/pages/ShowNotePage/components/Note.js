import React, { useEffect, useState } from "react";
import { H3, TagBox, RateBox } from "../../../components/styles/component.css";
import StaticRating from "../../ListPage/components/StaticRating";
import styled from "styled-components";
import { StampWrapper } from "../../../components/styles/note.css";
import { Line } from "../../../components/styles/note.css";

const NoteWrapper = styled.div`
  width: 60%;
  max-width: 1200px;
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

  img {
    grid-area: stamp;
    justify-self: end;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 90%;
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

export default function Note({note}) {
  

  function timeDistance() {
    const timeCreated = note.createDate;
    const timeToday = Date();
    console.log("cday:", timeCreated);
    console.log("tday:", timeToday);
    // const yearEndFromToday=
    // const yearEndFromCreated=
    const diffInMs = new Date(timeToday) - new Date(timeCreated);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const diffInHours = diffInMs / (1000 * 60 * 60);

    console.log(
      "diffInMs:",
      diffInMs,
      "diffInDays:",
      diffInDays,
      "diffInHours:",
      diffInHours
    );
    return diffInHours;
  }

  function msg(animal) {
    let AnimalBehavior;
    if (animal === "cat") {
      AnimalBehavior = Math.round(timeDistance()*10)/10;
      return "the cat has been sleeping for " + AnimalBehavior + " hrs";
    } else if (animal === "whale") {
      AnimalBehavior =  Math.round(timeDistance() * 40*10)/10;
      return "the whale has been swimming for " + AnimalBehavior + " km";
    } else if (animal === "rabbit") {
      let month = timeDistance() / (24 * 30);
      if (month >= 1) {
        AnimalBehavior = month * 5;
      } else {
        AnimalBehavior = 0;
      }
      return "the rabbit has given birth to "+ AnimalBehavior + " baby rabbits";
    }
    else{
      return "wait...."
    }
  }


  return (
    <>
      {note ? (
        <>
          {console.log("now note:", note)}
          <NoteWrapper>
            <StampWrapper grid={"stamp"} top={"30px"} right={"-90px"}>
              <Line>
                <img src={note.animal}></img>
              </Line>
            </StampWrapper>
            <H3 grid={"foreword"} padding={"60px"} border={"2px dashed #000"}>
              ... during the time you are worried,
              <br />
              {msg(note.animalName)}
            </H3>
            <TagBox grid={"tag"} align={"start"}>
              {note.tag}
            </TagBox>
            <RateBox grid={"rate"} align={"start"}>
              <StaticRating rate={note.rating}></StaticRating>
            </RateBox>
            <TextWrapper grid={"title"} fontWeight={600}>
              {note.title}
            </TextWrapper>
            <TextWrapper grid={"content"} fontWeight={400}>
              {note.worry}
            </TextWrapper>
          </NoteWrapper>
          {/* <p>createDate ‧ Has Been Passed : timePass</p> */}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
