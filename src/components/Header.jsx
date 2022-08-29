import React from "react";
import logo from '../assets/logo.jpeg';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <img src={logo} width="40" height="40" className="d-inline-block align-top" alt=""/>
          Pokemon List
        </a>
        
      </nav>
    </div>
  );
}
