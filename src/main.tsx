import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./components/global";

import "bootstrap";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);
