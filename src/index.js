import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import App from "./pages/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import stampReducer from "./reducers/stamp";
import formReducer from "./reducers/form";
import listReducer from "./reducers/list";
import modalReducer from "./reducers/modal";

const store = configureStore({
  reducer: {
    stamp: stampReducer,
    form: formReducer,
    list: listReducer,
    modal: modalReducer,
  },
});

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
