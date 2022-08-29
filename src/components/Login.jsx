import React, { useState } from "react";
import logo from '../assets/logo.jpeg';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    if (email === "seb" && password === "ssssss") {
      Window.alert("Error: Correo o contraseña incorrectos");
    } else {
      sessionStorage.setItem("email", email);
      window.location.href = "/";
      Window.alert("Bienvenido" + email);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h4>Login</h4>
              <img src={logo} width="50%" height="auto" className="d-inline-block align-top" alt=""/>
            </div>
            <div className="card-body">
              <form onSubmit={login}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    autoFocus
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Sign in"
                  className="btn btn-primary btn-block"
                />
                {/* <Link className="form-group" to="/registrar">
                  ¿Aún no tienes un usuario? Regístrate aquí
                </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
