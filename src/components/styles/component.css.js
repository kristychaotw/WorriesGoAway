import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ width }) => width || "100%"};
`;

export const WebTitle = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 2rem;
  padding: 5px 10px;
  color: #e6e6e6;
  text-align: center;
  /* border-top: 5px solid #8ba6bc; */
  padding-top: 20px;
`;

export const PageTitle = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 3rem;
  color: #e6e6e6;
  padding-left: 10%;
  text-align: left;
  margin-top: 90px;
  margin-bottom: 80px;

`;

export const TitleLable = styled.div`
  text-align: left;
  margin-left: 23%;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 40px 10px 10px 10px;
  color: ${(props) => (props.primary ? "#f2f2f2" : "#5185A6")};
`;

export const P = styled.p`
  padding: 10px;
  color: #e6e6e6;
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-left: 10%;
  text-align: left;
  margin-top: 100px;
  margin-bottom: 80px;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    margin: auto;
    width: 85%;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr); ;
`;
export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.6fr 0.4fr;
  grid-template-areas:
    "gtitle gtitle grate ganimal"
    "gtag   gtime  gtime gtime";

  justify-items: start;
  grid-row-gap: 10px;
  grid-column-gap: 15px;

  width: 100%;
  margin: auto;
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
    margin: auto;
    width: 85%;
    grid-template-columns: 30px 1fr;
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
  grid-area: ${({ grid }) => grid};
  border-bottom: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 20px;
  }
`;

export const TagBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  color: #656565;
  grid-area: ${({ grid }) => grid};
  justify-self: ${({ align }) => align || "end"};
`;

export const RateBox = styled.div`
  color: #656565;
  grid-area: grate;
  justify-self: ${({ align }) => align || "end"};
  grid-area: ${({ grid }) => grid};

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    justify-self: start;
  }
`;

export const InputLable = styled.div`
  text-align: left;
  margin-left: 23%;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 10px;
  color: ${(props) => (props.primary ? "#f2f2f2" : "#5185A6")};
`;

export const TextInput = styled.input`
  height: 30px;
  width: 50%;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 10px;
  align-self: stretch;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const BtnSubmit = styled.button`
  border: none;
  width: 50%;
  margin: 50px auto;
  padding: 10px;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.white};
  background: #8ba6bc;
  font-weight: bold;
  display: block;
  box-shadow: 2px 2px 4px #000000a1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.third};
  }

  &:active {
    color: #f0f0f0;
    transform: scale(0.95);
    transition: all 0.1s;
  }
`;
