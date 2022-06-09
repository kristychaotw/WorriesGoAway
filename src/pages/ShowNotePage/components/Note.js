import React, { useEffect, useState } from "react";
import { H3, TagBox, RateBox } from "../../../components/styles/component.css";
import StaticRating from "../../ListPage/components/StaticRating";
import { StampWrapper, Line, NoteWrapper, TextWrapper } from "../../../components/styles/note.css";
import moment from "moment";


export default function Note({ note }) {
  function timeDistance() {
    const timeCreated = moment(note.createDate);
    const timeToday = moment();
    console.log("cday:", timeCreated);
    console.log("tday:", timeToday);

    let duration = moment.duration(timeToday.diff(timeCreated));
    let diffinHours = duration.asHours();
    console.log("duration:", duration, "diff:", diffinHours);

    return diffinHours;
  }

  function msg(animal) {
    let AnimalBehavior;
    if (animal === "cat") {
      AnimalBehavior = Math.round(timeDistance() * 10) / 10;
      return "the cat has been sleeping for " + AnimalBehavior + " hrs";
    } else if (animal === "whale") {
      AnimalBehavior = Math.round(timeDistance() * 40 * 10) / 10;
      return "the whale has been swimming for " + AnimalBehavior + " km";
    } else if (animal === "rabbit") {
      let month = timeDistance() / (24 * 30);
      if (month >= 1) {
        AnimalBehavior = month * 5;
      } else {
        AnimalBehavior = 0;
      }
      return (
        "the rabbit has given birth to " + AnimalBehavior + " baby rabbits"
      );
    } else if (animal === "polarbear") {
      AnimalBehavior = Math.round(timeDistance() * 10 * 10) / 10;
      return "the polar bear has been swimming for " + AnimalBehavior + " km";
    } else if (animal === "brownbear") {
      AnimalBehavior = Math.round(timeDistance() * 1.6 * 10) / 10;
      return (
        "the grizzly bear has been catching " + AnimalBehavior + " salmons"
      );
    } else {
      return "wait....";
    }
  }

  return (
    <>
      {note ? (
        <>
          <NoteWrapper>
            <StampWrapper grid={"stamp"}>
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
