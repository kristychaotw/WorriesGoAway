import React from "react";
import scrollDown from "../../../components/images/icons/scrollDown.svg";
import styled from "styled-components";

const ScrollStyled = styled.div`
  position: relative;
  top: -60px;
  margin: 0 auto;
  animation: arrow 2s infinite;
  img {
    width: 80px;
    margin: 0 auto;
  }
  p {
    width: 200px;
    border-radius: 50px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.third};
    background-color: ${({ theme }) => theme.colors.white};;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  @keyframes arrow {
    0% {
      opacity: 0.2;
      transform: translateY(-20px);
    }
    50% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0.2;
      transform: translateY(-20px);
    }
  }
`;

export default function ScrollDown() {
  return (
    <ScrollStyled>
      <p>About Worry Note</p>
      <img src={`${scrollDown}`}></img>
    </ScrollStyled>
  );
}
