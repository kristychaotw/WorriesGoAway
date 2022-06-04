import React, { useReducer } from "react";
import styled from "styled-components";
import btnLeft from "../../../components/images/icons/bt_left.svg";
import btnRight from "../../../components/images/icons/bt_right.svg";
import { useDispatch } from "react-redux";
import { next, prev, pick } from "../../../reducers/stamp";
import { useSelector } from "react-redux";
import { updateNote } from "../../../reducers/form";

export const BtnSubmit = styled.button`
  padding: 5px 10px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  background: #5085a5;
  color: #fcfcfc;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.xl};
  box-shadow: 1px 1px 2px 0px hsla(0, 0%, 0%, 0.25);
  display: block;

  &:hover {
    background-color: #587b90;
  }

  &:active {
    background-color: #afdae3;
    color: #f0f0f0;
  }
`;

const AnimalSelector = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-area: picker;
  justify-self: end;

  img {
    width: 60%;
  }
`;

const AnimalSelectorController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  position: absolute;
  top: -33px;
`;

export const BtnArrow = styled.button`
  display: block;
  img {
    width: 100%;
    margin: 0 auto;
    box-shadow: 1px 1px 2px 0px #00000040;
    border-radius: 50%;
  }
`;

export default function SelectAnimal() {
  const dispatch = useDispatch();
  const animalIcon = useSelector((state) => state.stamp.value);

  function swipeRight() {
    dispatch(next());
  }

  function swipeLeft() {
    dispatch(prev());
  }

  function pickIcon() {
    dispatch(pick());
    dispatch(updateNote({animal:animalIcon.path}))
    dispatch(updateNote({animalName:animalIcon.animal}))

  }

  return (
    <AnimalSelector>
      <img src={animalIcon.path}></img>
      <AnimalSelectorController>
        <BtnArrow onClick={() => swipeLeft()}>
          <img src={`${btnLeft}`}></img>
        </BtnArrow>
        <BtnSubmit onClick={() => pickIcon()}>Pick</BtnSubmit>
        <BtnArrow onClick={() => swipeRight()}>
          <img src={`${btnRight}`}></img>
        </BtnArrow>
      </AnimalSelectorController>
    </AnimalSelector>
  );
}
