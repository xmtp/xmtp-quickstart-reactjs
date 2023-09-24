import "./polyfills";
import React from "react";
import ReactDOM from "react-dom/client";
import InboxPage from "./InboxPage-text";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InboxPage />
  </React.StrictMode>
);
