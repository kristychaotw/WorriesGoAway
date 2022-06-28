import React from "react";
import styled from "styled-components";
import coverMain from "../../../components/images/cover/cover-main.png";
import coverf1 from "../../../components/images/cover/cover-f1.png";
import coverf2 from "../../../components/images/cover/cover-f2.png";
import coverf3 from "../../../components/images/cover/cover-f3.png";
import duck from "../../../components/images/cover/duck.png";
import github from "../../../components/images/cover/github.svg";
import linkedin from "../../../components/images/cover/linkedin.svg";

const Container = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 200px auto;
`;

const FeatureWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 90px;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    display: block;
  }
`;

const Span = styled.span`
  color: #ffc24a;
  text-decoration: underline;
  cursor: default;
`;

const Header = styled.h1`
  margin: 100px auto;
  margin-top: 120px;
  font-size: 50px;
  text-align: center;
`;

const Para = styled.div`
  margin-top: 90px;
  h2 {
    font-size: 26px;
    font-weight: 600;
    color: #5085a5;
    letter-spacing: 1px;
    line-height: 3rem;
  }
  p {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 400;
    color: #242424;
    line-height:2rem;
  }
`;

const Feature = styled.div`
  text-align: center;
  font-size: 22px;
  color: #242424;
  width: 100%;
  padding: 20px;

  img {
    width: 50%;
    margin-top: 20px;
    margin: 0 auto;
  }

  h3 {
    font-weight: 600;
    margin-top: 30px;
    line-height: 3rem;
  }
  p {
    font-weight: 400;
    margin-top: 15px;
    line-height:2rem;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding: 10px;
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    margin-top: 60px;
  }
`;

const DeveloperBox = styled.div`
  margin: 80px auto;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 600px;

  img {
    width: 100px;
    height: 100px;
    margin-right: 40px;
    margin-bottom: 40px;
  }
  h3 {
    font-size: 26px;
    font-weight: 400;
    text-align: end;
    padding-left: 0;
    margin-left: 0;
    text-align: start;
  }

  p {
    font-size: 22;
    font-style: italic;
  }

  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    width: 100%;
    margin: 20px auto;
  }
`;

const Flexdiv = styled.div`
  display: flex;
  justify-content: left;
  img {
    width: 30px;
    height: 30px;
    margin: 15px 10px 10px 0;
  }
`;

export default function Cover() {
  return (
    <Container>
      <Header>Welcome to Worry Note</Header>
      <img src={`${coverMain}`}></img>
      <Para>
        <h2>
          A mood note features different animal timers <br></br>Fun and easy to
          use
        </h2>
        <p>
          This app is designed to let you experience your worry / thought /
          sufferings in an alternative sense of time -- through animals'
          behaviors
        </p>
      </Para>
      <FeatureWrapper>
        <Feature>
          <img src={`${coverf1}`}></img>
          <h3>Mood Note</h3>
          <p>Record your worry and stress level</p>
        </Feature>
        <Feature>
          <img src={`${coverf2}`}></img>
          <h3>Animal Timer</h3>
          <p>Switch your way of perceiving time through animal behaviors</p>
        </Feature>
        <Feature>
          <img src={`${coverf3}`}></img>
          <h3>User Report</h3>
          <p>Summarize usages and get insights from your worries</p>
        </Feature>
      </FeatureWrapper>
      <Para>
        <h2>Desktop and Mobile Friendly</h2>
        <p>Content adapts to multiple devices' screen sizes</p>
      </Para>
      <img></img>
      <Para>
        <h2>Programming Tools</h2>
        <p>
          This is a SPA website built with React hooks and React router,{" "}
          <br></br>and it is hosted by Firebase Hosting. <br></br>
          <br></br> Visit Github for more details.
        </p>
      </Para>
      <Para>
        <h2>Meet the Developer</h2>
        <p>
          Any comment or bug report on this project, contact{" "}
          <Span>kristy334420@gmail.com</Span>
        </p>
      </Para>
      <DeveloperBox>
        <img src={`${duck}`}></img>
        <div>
          <p>Frontend Developer</p>
          <h3>Kristy Chao</h3>
          <Flexdiv>
            <a href="https://github.com/kristychaotw/WorriesGoAway">
              {" "}
              <img src={`${github}`}></img>
            </a>
            <a href="https://www.linkedin.com/in/kristy-chao-b637b0187/">
              <img src={`${linkedin}`}></img>
            </a>
          </Flexdiv>
        </div>
      </DeveloperBox>
    </Container>
  );
}
