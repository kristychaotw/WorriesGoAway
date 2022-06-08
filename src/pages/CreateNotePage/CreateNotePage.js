import React from "react";
import SelectAnimal from "./components/SelectAnimal";
import Form from "./components/Form";
import { PageTitle } from "../../components/styles/component.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, saveNote, failtoSaveNote } from "../../reducers/form";
import SaveNote from "../../../src/reducers/utils/db";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-template-areas: "picker form form form";
  width: 85%;
  max-width: 1200px;
  margin: 60px auto;
  margin-right: 90px;
  margin-top: 230px;


  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "picker"
      "form";
    margin-right: auto;
    margin-top: auto;
  }
`;

const SendBtn = styled.button`
  padding: 5px 10px;
  margin: 10px;
  margin-bottom: 180px;
  border: none;
  border-radius: 10px;
  background: #5085a5;
  color: #fcfcfc;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl};
  box-shadow: 1px 1px 2px 0px hsla(0, 0%, 0%, 0.25);
  display: inline-block;

  &:hover {
    background-color: #587b90;
  }

  &:active {
    background-color: #afdae3;
    color: #f0f0f0;
  }
`;

export default function CreateNotePage() {
  const dispatch = useDispatch();
  const formContent = useSelector((state) => state.form.value);

  return (
    <>
      <PageTitle>Add A New Note </PageTitle>
      <GridContainer>
        <SelectAnimal></SelectAnimal>
        <Form></Form>
      </GridContainer>
      <p>
        Fill out the questions before you send it
        <SendBtn onClick={() => SaveNote(formContent)}>Send</SendBtn>
      </p>
    </>
  );
}
