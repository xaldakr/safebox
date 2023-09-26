import React, { useState } from "react";
import "../../style/login.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fondo">
      <div className="container mt-5 w-100 h-100">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-3 text-center">
            <div className="cardo">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Iniciar sesión</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Tu contraseña"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                      <a className="lost" href="">
                        Olvide mi contraseña
                      </a>
                      <br />
                      <Link to="register">
                        <a className="lost" href="">
                          No tengo cuenta || Crear cuenta
                        </a>
                      </Link>
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                      <strong>Iniciar sesión</strong>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
