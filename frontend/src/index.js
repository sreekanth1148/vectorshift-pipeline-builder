import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ReactFlowProvider>
    <App />
  </ReactFlowProvider>
);