import React from "react";
import { FaCircle } from "react-icons/fa";
import styled from "styled-components";

const StyledCircle = styled.div`
  margin: 2px;
`;

export const StyledRating = styled.div`
display: flex;
justify-content: flex-start;
`


export default function StaticRating({ rate }) {
  return (
    <StyledRating>
      {[...Array(5)].map((circle, index) => {
        
        return (
          <StyledCircle key={index}>
            <div>
              <FaCircle
                size={16}
                color={rate <= index ? "#e4e5e9" : "#8BA6BC"}
              ></FaCircle>
            </div>
          </StyledCircle>
        );
      })}
    </StyledRating>
  );
}
