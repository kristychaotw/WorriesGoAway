import React from "react";
import { Overlay, ModalContent, ModalWrapper, ModalBtn } from "./modal.css";
import { closeModal } from "../reducers/modal";
import { useDispatch, useSelector } from "react-redux";

export default function Modal() {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal.value);

  return (
    <ModalWrapper>
      <Overlay onClick={() => dispatch(closeModal())}>
        <ModalContent>
          {/* <div><img /></div> */}
          <h2>{modalState.headlines}</h2>
          <p>{modalState.msg}</p>
          <ModalBtn onClick={() => dispatch(closeModal())}>Close</ModalBtn>
        </ModalContent>
      </Overlay>
    </ModalWrapper>
  );
}
