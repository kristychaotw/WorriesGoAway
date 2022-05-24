import styled from "styled-components"

export const StyledRating = styled.div`
display: flex;
justify-content: center;
`

export const Button = styled.button`
padding: 10px;
margin: 10px;
background: #fcfcfc;
border: none;
border-radius: 3px;
color:#8BA6BC;

&:hover{
  background-color: #e4e5e9;
  color: #5185A6;
}

&:active{
  background-color: #8BA6BC;
  color: #f0f0f0;

}
`


export const TagButton = styled.button`
padding: 10px;
margin: 10px;
background: #fcfcfc;
border: none;
border-radius: 3px;
color:#8BA6BC;

&:hover{
  background-color: #e4e5e9;
  color: #5185A6;
}

&:active{
  background-color: #8BA6BC;
  color: #f0f0f0;

}
`

export const TextAreaBox = styled.input`
  font-size: 1em;
  padding: 10px;
  margin: 10px;
  background: #fcfcfc;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color:#8BA6BC;
  }
`;

