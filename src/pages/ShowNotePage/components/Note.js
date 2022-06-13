import React, { useEffect, useState } from "react";
import {
  H3title,
  TagBox,
  RateBox,
  PStyled,
} from "../../../components/styles/component.css";
import StaticRating from "../../ListPage/components/StaticRating";
import {
  StampWrapper,
  Line,
  NoteWrapper,
  TextWrapper,
} from "../../../components/styles/note.css";
import moment from "moment";

export default function Note({ note }) {
  const timeCreated = moment(note.createDate);
  const timeToday = moment();
  const timeEnd = moment(note.endDate);

  function timeDistance() {
    let duration;
    if (timeEnd.isValid()) {
      duration = moment.duration(timeEnd.diff(timeCreated));
    } else {
      duration = moment.duration(timeToday.diff(timeCreated));
    }
    let diffinHours = duration.asHours();

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
            <H3title
              grid={"foreword"}
              padding={"60px"}
              border={"2px dashed #000"}
            >
              ... during the time you are worried,
              <br />
              {msg(note.animalName)}
            </H3title>
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
            {timeEnd.isValid() && (
              <PStyled align={"left"} grid={"enddate"}>
                End Date: {timeEnd.format("MMM Do YY")}
              </PStyled>
            )}
          </NoteWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
