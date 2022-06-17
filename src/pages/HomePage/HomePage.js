import React from "react";
import { PageTitle } from "../../components/styles/component.css";
import Foreword from "./components/Foreword";
import { PageContainer } from "../../components/styles/container.css";
import Static from "./components/Static";


export default function HomePage() {
  return (
    <>
      <PageTitle>Home Page</PageTitle>
      <PageContainer>
        <Foreword />
        <Static />
      </PageContainer>
    </>
  );
}
