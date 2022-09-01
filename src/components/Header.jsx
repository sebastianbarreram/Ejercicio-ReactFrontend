import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ "justifyContent": "right" }}>
            <div className="navbar-nav ">
              <div className="nav-item nav-link">
                {sessionStorage.getItem("user")}
              </div>
              <Link
                className="nav-item nav-link"
                onClick={() => salir()}
                to="/">
                <div className="fas fa-user-times"></div> Logout
              </Link>
            </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}
