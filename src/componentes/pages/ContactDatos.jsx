import React, { useState } from "react";
import "../../style/login.css";
import { Link } from "react-router-dom";
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
    <div className="ContactFd">
      <div className="container mt-5 w-100 h-100">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4 text-center">
            <div className="contenedorzx">
              <br />
              <br />
              <h2>Contacto</h2>
              Dirección:
              <br />
              Calle Cualquiera 123, Avenida CECOT
              <br />
              <br />
              Teléfonos:
              <br />
              912435-2435-245221457-4
              <br />
              52345-4325-452245-2425
              <br />
              <br />
              Email:
              <br />
              casas@casas.casas
              <br />
              casas@casas.sv
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
