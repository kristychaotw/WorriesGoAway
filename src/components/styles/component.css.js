import styled from "styled-components";

export const PageTitle = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 2rem;
  padding: 5px 10px;
  color: #e6e6e6;
  text-align: center;
  border-top: 5px solid #8ba6bc;
  padding-top: 20px;
`;

export const TitleLable = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  padding: 40px 10px 10px 10px;
  color: ${(props) => (props.primary ? "#f2f2f2" : "#5185A6")};
`;

export const P = styled.p`
  padding: 10px;
  color: #e6e6e6;
`;

export const BtnSubmit = styled.button`
  padding: 10px;
  margin: 50px auto;
  color: #fcfcfc;
  border: none;
  border-radius: 3px;
  background: #8ba6bc;
  font-weight: bold;
  display: block;

  &:hover {
    background-color: #587b90;
  }

  &:active {
    background-color: #afdae3;
    color: #f0f0f0;
  }

`;


export const H2 =styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-left:10%;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
    margin:auto;
    width: 85%;
    }
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns:  repeat(4,1fr);
  grid-template-rows: repeat(2,1fr);
;
`
export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.6fr 0.4fr;
  grid-template-areas:
    "gtitle gtitle grate ganimal"
    "gtag   gtime  gtime gtime";

  justify-items: start;
  grid-row-gap: 10px;
  grid-column-gap: 15px;

  margin:auto;
  width: 70%;
  margin-right:30px;
  border-bottom: 1px solid #5085a5;
  padding: 40px 0px 20px 0px;

 

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 300;
    color: #656565;
    grid-area: gtime;
    justify-self: end;
    text-align: end;

  }
  img {
    grid-area: ganimal;
    justify-self: end;
  }
  
  @media (max-width: ${({ theme }) => theme.device.tablet}) {
  margin:auto;
  width: 85%;
  grid-template-columns:30px 1fr ;
  grid-column-gap: 5px;
  grid-template-areas:
    "gtitle gtitle"
    "grate ganimal"
    "gtag  gtime";
  }


  `;


export const H3 = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
  text-align: start;
  color: #333333;
  grid-area: gtitle;
  `;

export const TagBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  color: #656565;
  grid-area: gtag;
  `;

export const RateBox = styled.div`
  color: #656565;
  grid-area: grate;
  justify-self: end;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    justify-self: start;
  }
`;