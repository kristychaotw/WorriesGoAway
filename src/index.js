import "./index.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import App from "./pages/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./reducers/user";
import stampReducer from "./reducers/stamp";
import formReducer from "./reducers/form";



const store = configureStore({
  reducer: {
    user: userReducer,
    stamp:stampReducer,
    form:formReducer,
  },
});

const container = document.querySelector("#root");
const root = createRoot(container);

console.log("test");

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
