import "./index.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import App from "./pages/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";



const container = document.querySelector("#root");
const root = createRoot(container);

console.log("test");

root.render(
    <BrowserRouter>
     <App/>
    </BrowserRouter>
);
