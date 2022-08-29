import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PokemonInfo from "./components/PokemonInfo";
import Axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

Axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokeInfo/:id" element={<PokemonInfo />} />
    </Routes>
  </Router>

  //</React.StrictMode>
);
