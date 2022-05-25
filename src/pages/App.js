import React from "react";
import CreateNotePage from "./CreateNotePage/CreateNotePage";
import LoginPage from "./LoginPage/LoginPage";
import ListPage from "./ListPage/ListPage";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import { AppContainer } from "../components/styles/container.css";
import Nav from "../components/styles/Nav";
import { useAuth } from "../firebase";

const theme = {
  colors: {
    body: "#000",
    nav: "#000",
    primary: "#000",
    secondary: "#656565",
  },
  fontSize: {
    s: "0.8rem",
    m: "1rem",
    l: "1.2rem",
    xl: "1.5rem",
    xxl: "1.8rem",
    xxxl: "2rem",
  },
  spacing: {
    xs: "5px",
    s: "10px",
    m: "20px",
    l: "40px",
  },
  device: {
    mobile: "600px",
    tablet: "998px",
    desktop: "1200px",
  },
  maxWidth: "1800px",
};

export default function App() {
  const currentUser = useAuth();
  console.log("c-ser:", currentUser);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* {currentUser? <Nav />:<Nav display={"none"}/>} */}
        {/* <Nav /> */}
        {/* <AppContainer> */}
        <Nav display={currentUser == null && "none"} />
        <AppContainer
          padding={currentUser === null && "0"}
          maxWidth={currentUser === null && "1800px"}
        >
          <Routes>
            <Route path="/d" element={<LoginPage />} />
            <Route path="/ds" element={<CreateNotePage />} />
            <Route path="/" element={<ListPage />} />
          </Routes>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
