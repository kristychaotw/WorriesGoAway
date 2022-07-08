import styled from "styled-components";

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "tag note stress";

  h4 {
    grid-area: "tag";
    color: ${({ theme }) => theme.colors.primary};
  }
  h5 {
    grid-area: "note";
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    grid-area: "stress";
    color: ${({ theme }) => theme.colors.primary};
  }
`;

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
  padding-top: 50px;
  letter-spacing: 5px;
`;

export const PageTitle = styled.div`
  font-family: "Raleway", sans-serif;
  position: fixed;
  top: 0px;
  left: 0px;
  margin-top: 90px;
  margin-bottom: 80px;
  padding-left: 10%;
  text-align: left;
  animation: titleAnimation 0.3s;
  font-style: italic;
  font-weight: 400;
  h3 {
    color: #e4e4e4;
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.nav};
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    position: static;
    h3 {
    }
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    margin-top: 50px;
    margin-bottom: 40px;
    h3 {
    }
  }

  @keyframes titleAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
  color: #f0f0f0;
  font-weight: 500;
  grid-area: ${({ grid }) => grid};
`;

export const MsgLogin = styled.p`
  padding: 10px;
  color: ${({ theme }) => theme.colors.hint};
  font-weight: 500;
  text-align: left;
  grid-area: ${({ grid }) => grid};
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 10px 0px;
  }
`;

export const MsgHint = styled.p`
  color: ${({ theme }) => theme.colors.hint};
  font-weight: 500;
  text-align: left;
  grid-area: ${({ grid }) => grid};
`;

export const PStyled = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  color: #656565;
  grid-area: ${({ grid }) => grid};
  justify-self: end;
  text-align: ${({ align }) => align || "end"};
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

export const StyledCardWrapper = styled.div`
  cursor: pointer;

  & :hover {
    background-color: ${({ theme }) => theme.colors.whiteh80};
  }
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

  img {
    grid-area: ganimal;
    justify-self: end;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    margin: auto;
    width: 85%;
    grid-template-columns: 1fr 110px 35px;
    grid-column-gap: 15px;
    grid-template-areas:
      "gtitle gtitle ganimal"
      "gtitle gtitle gtag"
      "grate  gtime  gtime";
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    grid-template-columns: 1fr 90px 35px;
    grid-template-areas:
      "gtitle gtitle gtitle"
      "grate gtag ganimal"
      "gtime  gtime  gtime";
  }
`;

export const H3title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 500;
  text-align: start;
  color: ${({ theme }) => theme.colors.word};
  grid-area: ${({ grid }) => grid};
  border-bottom: ${({ border }) => border};
  padding-bottom: 40px;
`;

export const H3 = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
  text-align: start;
  color: #333333;
  grid-area: ${({ grid }) => grid};
  border-bottom: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 10px 20px;
  }
`;

export const TagBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  color: #656565;
  grid-area: ${({ grid }) => grid};
  justify-self: start;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    justify-self: end;
  }
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
  font-weight: 400;
  font-size: 1.2rem;
  padding: 10px 0px;
  color: ${(props) => (props.primary ? "#f2f2f2" : "#5185A6")};
`;

export const TextInput = styled.input`
  height: 30px;
  width: 100%;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.whiteh80};
  border-radius: 0%;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  transition: all 0.3s ease;
  position: relative;

  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

export const BtnSubmit = styled.button`
  border: none;
  width: 50%;
  margin: 20px auto;
  margin-bottom: ${({ marginbt }) => marginbt};
  margin-left: ${({ margin }) => margin};
  padding: 10px;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ color }) => color || "#8ba6bc"};
  font-weight: bold;
  display: block;
  box-shadow: 2px 2px 4px #000000a1;
  grid-area: ${({ grid }) => grid};

  &:hover {
    background-color: ${({ theme }) => theme.colors.third};
  }

  &:active {
    transform: scale(0.95);
    transition: all 0.1s;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 70%;
  }
`;

export const StaticStyled = styled.div`
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  padding: ${({ theme }) => theme.spacing.l};
  grid: ${({ grid }) => grid};
  margin-top: 40px;

  h3 {
    position: absolute;
    top: -${({ theme }) => theme.fontSize.m};
    left: 20px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.body};
    font-weight: 700;
    padding: 0px 10px;
    margin-bottom: 20px;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.primary};
    text-align: left;
    padding-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const FormContainer = styled.div`
  width: 400px;
  margin: 30px auto;
  margin-bottom: 80px;
  padding: 10px 0px;
  text-align: center;
  background: #00000040;
  border: 1px solid rgba(19, 19, 19, 0.053);
  border-radius: 5px;
  box-shadow: 3px 3px 5px #000000a1;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 80%;
  }
`;

export const FormStyled = styled.form`
  margin: 20px 60px 30px 60px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    margin: 20px 30px;
  }
`;
