import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("logged")) {
      setLogged(true);
    }
  }, []);

  const salir = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ justifyContent: "none" }}
      >
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          Pokemon List
        </a>
        <div
          className="navbar-collapse collapse"
          style={{ "justifyContent": "right" }}
        >
          {logged ? (
            <div className="nav navbar-nav" id="navbarSupportedContent">
              <div className="nav-item nav-link">
                {sessionStorage.getItem("user")}
              </div>
              <Link
                className="nav-item nav-link"
                onClick={() => salir()}
                to="/"
              >
                <div className="fas fa-user-times"></div> Logout
              </Link>
            </div>
          ) : (
            <div className="nav navbar-nav" id="navbarSupportedContent">
              <Link className="nav-item nav-link" to="/login">
                <div className="fas fa-user"></div> Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
