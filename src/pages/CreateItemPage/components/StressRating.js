import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import styled from "styled-components"
import { TitleLable } from "../../css/component.css";

const ContainerRating=styled.div`
display: flex;
justify-content: center;
`

export default function StressRating(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  function handleRating(ratingValue){
    setRating(ratingValue)
    props.newRate(ratingValue)
  }
  return (
    <>
      <TitleLable>Stress Rating</TitleLable>
      <ContainerRating>
      {[...Array(5)].map((circle, i) => {
        const ratingValue = i + 1;
     
        return (
          <label key={'circle'+ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
              // onClick={()=>props.newRate(ratingValue)}
            />
            <FaCircle
              size={40}
              className="rateCircle"
              color={ratingValue <= (hover || rating) ? "#8BA6BC" : "#e4e5e9"}
              onMouseEnter={()=> setHover(ratingValue)}
              onMouseLeave={()=> setHover(null)}
            />
          </label>
        );
      })}
      </ContainerRating>
       {/* <p>The rating is {rating}.</p> */}
    </>
  );
}
