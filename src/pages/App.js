import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, ResetStyle } from "../components/styles/Global";
import { AppContainer } from "../components/styles/container.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "../components/nav/Nav"
import CreateNotePage from "./CreateNotePage/CreateNotePage";
import LoginPage from "./LoginPage/LoginPage";
import ListPage from "./ListPage/ListPage";
import PrivateRoute from "../PrivateRoute";
import ShowNotePage from "./ShowNotePage/ShowNotePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import HomePage from "./HomePage/HomePage";
import Test from "./Test";
import { AuthProvider } from "../firebase";
import { AnimatePresence } from "framer-motion";

const theme = {
  colors: {
    body: "#F2F2F2",
    nav: "#5085A5",
    primary: "#8BA6BC",
    secondary: "#656565",
    third: "#5085A5",
    forth: "#8ba6bc",
    dark: "#656565",
    white: "#FCFCFC",
    primaryh66: "#8BA6BC66",
    whiteh80: "#FCFCFC80",
    dark80: "#65656580",
    lightpurple: "#e4e5e9",
    word: "#4A4A4A",
    hint: "#ffd166",
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

export const FMContextVar = React.createContext();
export const FMContextTrans = React.createContext();

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "100vh",
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 70,
  duration: 0.8,
};

export default function App() {
  const location = useLocation();
  return (
    <div>
      <ResetStyle />
      <GlobalStyles />
      <AuthProvider>
        <FMContextVar.Provider value={pageVariants}>
          <FMContextTrans.Provider value={pageTransition}>
            <ThemeProvider theme={theme}>
              <Nav />
              <AppContainer>
                <AnimatePresence exitBeforeEnter>
                  <Routes location={location} key={location.pathname}>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route path="*" element={<Test />} />
                    <Route element={<PrivateRoute />}>
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/add" element={<CreateNotePage />} />
                      <Route path="/list" element={<ListPage />} />
                      <Route path="/note" element={<ShowNotePage />} />
                      <Route path="/user" element={<ProfilePage />} />
                      <Route path="*" element={<Test />} />
                    </Route>
                  </Routes>
                </AnimatePresence>
              </AppContainer>
            </ThemeProvider>
          </FMContextTrans.Provider>
        </FMContextVar.Provider>
      </AuthProvider>
    </div>
  );
}
