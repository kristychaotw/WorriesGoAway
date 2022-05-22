import "./index.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import App from './pages/App'
import { BrowserRouter } from "react-router-dom"
import { createRoot} from 'react-dom/client'

const container =  document.querySelector("#root")
const root = createRoot(container)

console.log("test");

root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  );