import React from "react";
import CreateItemPage from "./CreateItemPage/CreateItemPage";
import LoginPage from "./LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/editor" element={<CreateItemPage />} />
      </Routes>
    </>
  );
}
