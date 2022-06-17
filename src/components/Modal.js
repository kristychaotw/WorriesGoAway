import React from "react";
import { Overlay, ModalContent, ModalWrapper, ModalBtn } from "./modal.css";
import { closeModal } from "../reducers/modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal.value);
  const nav = useNavigate();

  return (
    <ModalWrapper>
      <Overlay onClick={() => dispatch(closeModal())}>
        <ModalContent>
          {/* <div><img /></div> */}
          <h2>{modalState.headlines}</h2>
          <p>{modalState.msg}</p>
          {modalState.msg !== "successfully saved" && (
            <ModalBtn onClick={() => dispatch(closeModal())}>Close</ModalBtn>
          )}
          {modalState.msg === "successfully saved" && (
            <ModalBtn onClick={() => dispatch(closeModal())}>Add more notes</ModalBtn>
          )}
          {modalState.msg === "successfully saved" && (
            <ModalBtn onClick={() => nav("/list")}>See my list</ModalBtn>
          )}
        </ModalContent>
      </Overlay>
    </ModalWrapper>
  );
}
