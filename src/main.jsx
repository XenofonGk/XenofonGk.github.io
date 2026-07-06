import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n"; // CRITICAL: This MUST be loaded first before App compiles
import App from "./App.jsx";

// PrimeReact System Stylesheets
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// Global CSS Overwrites
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
