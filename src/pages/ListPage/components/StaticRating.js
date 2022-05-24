import React from "react";
import { FaCircle } from "react-icons/fa";
import { StyledRating } from "../../../components/styles/note.css";
import styled from "styled-components";

const StyledCircle = styled.div`
  margin: 10px;
`;

export default function StaticRating({ rate }) {
  return (
    <StyledRating>
      {[...Array(5)].map((circle, index) => {
        
        return (
          <StyledCircle key={index}>
            <div>
              <FaCircle
                size={20}
                color={rate <= index ? "#e4e5e9" : "#8BA6BC"}
              ></FaCircle>
            </div>
          </StyledCircle>
        );
      })}
    </StyledRating>
  );
}
