import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ApiProvider from "./providers/ApiProvider";
import ThemeProvider from "./providers/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
