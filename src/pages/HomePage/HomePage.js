import React from "react";
import { PageTitle } from "../../components/styles/component.css";
import Foreword from "./components/Foreword";
import { Container } from "../../components/styles/container.css";
import Static from "./components/Static";

export default function HomePage() {
  return (
    <>
      <PageTitle>Home Page</PageTitle>
      <Container>
        <Foreword />
        <Static />
      </Container>
    </>
  );
}
