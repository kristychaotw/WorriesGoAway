import styled from "styled-components"

export const PageTitle=styled.div`
font-family: 'Raleway', sans-serif;
font-weight: 400;
font-style: italic;
font-size: 2rem;
padding: 5px 10px;
color:#e6e6e6;
text-align:center;
border-top: 5px solid #8BA6BC;
padding-top: 20px;
`


export const TitleLable=styled.div`
font-weight: 400;
font-size: 1.2rem;
padding: 40px 10px 10px 10px;
color:${props => props.primary? '#f2f2f2':'#5185A6'}; 
`

export const P=styled.p`
padding: 10px;
color:#e6e6e6;
`

export const BtnSubmit=styled.button`
padding: 10px;
margin: 50px auto;
color: #fcfcfc;
border: none;
border-radius: 3px;
background:#8BA6BC;
font-weight: bold;
display:block;



&:hover{
    background-color: #587b90;
  }
  
  &:active{
    background-color: #AFDAE3;
    color: #f0f0f0;
  }
`

export const StyledCard = styled.div`
  /* display: flex;
  justify-content: space-between; */
  background-color: aliceblue;
  border-bottom: 1px solid #454545;
  padding:40px;
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);

  h3{
    font-weight: 700;
  }
`