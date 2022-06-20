import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { App } from "./App";
import { StoreProvider } from "./context/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  // </React.StrictMode>
);
