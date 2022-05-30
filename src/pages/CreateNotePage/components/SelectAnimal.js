import React, { useReducer } from "react";
import styled from "styled-components";
import whale from "../../../components/images/icons/whale.svg";
import btnLeft from "../../../components/images/icons/bt_left.svg";
import btnRight from "../../../components/images/icons/bt_right.svg";

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
  const animalList = [
    { id: 1, animal: "whale", path: `${whale}`, picked: false },
    { id: 2, animal: "cat", path: `${whale}`, picked: false },
    { id: 3, animal: "rabbit", path: `${whale}`, picked: false },
  ];

  const Action = {
    CLICKR: "clickR",
    CLICKL: "clickL",
    PICK: "pick",
  };

  const [state, dispatch] = useReducer(reducerStamp, animalList[0]);
  console.log("state:", state);
  let newIndex = state.id;

  function reducerStamp(state, action) {
    switch (action.type) {
      case Action.CLICKR:
        if (state.id <= animalList.length - 1) {
          newIndex = state.id;
        } else {
          newIndex = 0;
        }
        return animalList[newIndex];

      case Action.CLICKL:
        if (state.id <= 1) {
          newIndex = animalList.length - 1;
        } else {
          newIndex = state.id - 2;
        }
        return animalList[newIndex];
      case Action.PICK:
        state.picked = true;
        console.log("p-s:",state);
        return state;
      default:
        return state;
    }
  }

  function swipeRight() {
    dispatch({ type: Action.CLICKR });
  }

  function swipeLeft() {
    dispatch({ type: Action.CLICKL });
  }

  function pick() {
    dispatch({ type: Action.PICK });
  }

  return (
    <AnimalSelector>
      <img src={state.path}></img>
      <AnimalSelectorController>
        <BtnArrow onClick={() => swipeLeft()}>
          <img src={`${btnLeft}`}></img>
        </BtnArrow>
        <BtnSubmit onClick={() => pick()}>Pick</BtnSubmit>
        <BtnArrow onClick={() => swipeRight()}>
          <img src={`${btnRight}`}></img>
        </BtnArrow>
      </AnimalSelectorController>
    </AnimalSelector>
  );
}
