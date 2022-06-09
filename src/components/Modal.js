import React, { useState } from "react";
import { Overlay, ModalContent, ModalWrapper } from "./modal.css";


export default function Modal({type,msg,setIsOpen}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    setIsOpen(false)
  };


  return (
    <div>
      {/* <button onClick={toggleModal}>Open</button> */}
      {modal && (
        <ModalWrapper>
          <Overlay onClick={toggleModal}>
            <ModalContent>
              {/* <div><img /></div> */}
              <h2>Hello Modal{type}</h2>
              <p>msg{msg}</p>
              <button onClick={toggleModal}>Close</button>
            </ModalContent>
          </Overlay>
        </ModalWrapper>
      )}
    </div>
  );
}
