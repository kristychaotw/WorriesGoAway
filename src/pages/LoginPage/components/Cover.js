import React from "react";
import styled from "styled-components";
import { H3, PStyled, P } from "../../../components/styles/component.css";
import { TitleLable } from "../../../components/styles/note.css";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  padding: 100px 25%;
  border-top: 20px solid ${({ theme }) => theme.colors.lightpurple};
  border-bottom: 60px solid ${({ theme }) => theme.colors.lightpurple};
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 100px 15%;

}
`;

const FeatureBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-areas:
    "p h4"
    "p h5";
  grid-row-gap: 0;
  grid-column-gap: 20px;
  justify-items: left;
  align-items: baseline;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "p"
      "h4"
      "h5";
    grid-row-gap: 10px;
  }

  h4,
  h5 {
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: ${({ theme }) => theme.fontSize.xl};
    font-weight: 600;
    text-align: start;
    color: ${({ theme }) => theme.colors.word};
    grid-area: ${({ grid }) => grid};
    margin-bottom: 30px;
  }
  h5 {
    font-weight: 400;
    grid-area: h5;
  }
  h4 {
    grid-area: h4;
    height: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: 120px;
    color: ${({ theme }) => theme.colors.lightpurple};
    font-weight: 900;
    text-align: left;
    grid-area: p;
  }
`;

export default function Cover() {
  return (
    <Container>
      <PStyled>Sense your worry with animal timer</PStyled>
      <TitleLable>ABOUT Worry Note</TitleLable>
      <br></br>
      <H3>Note + Animal Timer</H3>
      <TitleLable>FEATURES</TitleLable>
      <FeatureBox>
        <p>1</p>
        <h4>Unique Animal Timer</h4>
        <h5>5 animals including whale, cat, rabbit, polar bear, brown bear</h5>
      </FeatureBox>
      <FeatureBox>
        <p>2</p>
        <h4>Catch your thought with note</h4>
        <h5>stress rating, catogory tags, duration of worry</h5>
      </FeatureBox>
      <FeatureBox>
        <p>3</p>
        <h4>Personal Overview Report</h4>
        <h5>rack and analyze overall stress level</h5>
      </FeatureBox>

      <TitleLable>GUIDE</TitleLable>
      <H3>1. Add notes</H3>
      <H3>2. Show note list</H3>
      <H3>3. Get Overview report</H3>
      <TitleLable>DEVELOP BY</TitleLable>
      <H3>Kristy Chao</H3>
    </Container>
  );
}
