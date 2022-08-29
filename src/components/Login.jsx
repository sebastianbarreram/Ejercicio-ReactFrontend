import React, { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    if (user === "sebas" && password === "ssssss") {
      console.log(user);
      sessionStorage.setItem("user", user);
      sessionStorage.setItem("logged", true);
      window.alert("Bienvenido " + user);
      window.location.href = "/";
    } else {
      window.alert("Error: Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h4>Login</h4>
              <img
                src={logo}
                width="50%"
                height="auto"
                className="d-inline-block align-top"
                alt=""
              />
            </div>
            <div className="card-body">
              <form onSubmit={login}>
                <div className="form-group">
                  <label>User</label>
                  <input
                    type="text"
                    className="form-control"
                    autoFocus
                    required
                    onChange={(e) => setUser(e.target.value)}
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
