import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import PokemonInfo from "./components/PokemonInfo";
import Login from "./components/Login";

Axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

const userIsLogged = () => {
  const token = sessionStorage.getItem("logged");
  if (token) {
    return true;
  }
  return false;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" exact element={userIsLogged() ? <App /> : <Navigate to="/login" />}
      />
      <Route path="/pokeInfo/:id" exact element={userIsLogged() ? <PokemonInfo /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>

  //</React.StrictMode>
);
