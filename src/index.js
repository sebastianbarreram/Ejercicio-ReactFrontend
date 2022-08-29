import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonInfo from "./components/PokemonInfo";
import Login from "./components/Login";

Axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokeInfo/:id" element={<PokemonInfo />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>

  //</React.StrictMode>
);
