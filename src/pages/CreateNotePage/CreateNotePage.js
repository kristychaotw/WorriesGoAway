import React from "react";
import SelectAnimal from "./components/SelectAnimal";
import PaperForm from "./components/PaperForm";
import { H2, PageTitle } from "../../components/styles/component.css";
import styled from "styled-components";
import SubmitNote from "./components/SubmitNote";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-template-areas: "picker form form form";
  width: 85%;
  margin: 60px auto;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "picker"
      "form";
  }
`;

export default function CreateNotePage() {
  return (
    <>
      <PageTitle>Add A New Note </PageTitle>
      <GridContainer>
        <SelectAnimal></SelectAnimal>
        <PaperForm></PaperForm>
      </GridContainer>
      <p>Fill out the questions before you send it  <SubmitNote></SubmitNote></p>
    
      {/* <p>Current result is {JSON.stringify(state)}</p> */}
    </>
  );
}
