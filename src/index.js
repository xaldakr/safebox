import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

//import Login from "./componentes/pages/login";

//import AYUDA from "./componentes/pages/ayuda";

import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
