import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../style/registra.css";
const Registrarse = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [imagenPerfil, setImagenPerfil] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [errorRegistro, setErrorRegistro] = useState(false);

  const handleImagenPerfilChange = (e) => {
    // Manejar la carga de la imagen de perfil aquí
    const imagen = e.target.files[0];
    setImagenPerfil(imagen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !nombres ||
      !apellidos ||
      !telefono ||
      !correo ||
      !fechaNacimiento ||
      !contrasena
    ) {
      setErrorRegistro(true);
      setRegistroExitoso(false);
      return;
    }
    // Crear un objeto FormData con los datos del formulario
    const formData = {
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      correo: correo,
      fechaNacimiento: fechaNacimiento,
      contrasena: contrasena,
      imagenPerfil: imagenPerfil,
    };
    var url = "http://localhost:3001/signup";

    try {
      const response = await axios.post(url, formData);
      if (response.data.token) {
        setRegistroExitoso(true);
        navigate("/");
      } else {
        setError("Error no se puede crear el usuario");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div className="fondo h-100">
      <div className="container ">
        <div className="row justify-content-center align-items-center no-margin fondocontener p-4">
          {errorRegistro && (
            <div className="alert alert-danger" role="alert">
              No se pudo crear la cuenta. Por favor, completa todos los campos.
            </div>
          )}

          {registroExitoso && (
            <div className="alert alert-success" role="alert">
              El registro se ha realizado correctamente.
            </div>
          )}
          <div className="col-md-4">
            {/* Contenido de la columna izquierda */}
            {/* ... */}
            <h1>Registrarse</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombres" className="form-label">
                  Nombres
                </label>
                <input
                  type="text"
                  className="form-control inputverde"
                  id="nombres"
                  value={nombres}
                  onChange={(e) => setNombres(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellidos" className="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control inputverde"
                  id="apellidos"
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control inputverde"
                  id="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control inputverde"
                  id="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>

          <div className="col-md-4">
            {/* Contenido de la columna derecha */}

            <form onSubmit={handleSubmit}>
              {/* ... */}
              <div className="mb-3">
                <label htmlFor="fechaNacimiento" className="form-label">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  className="form-control inputverde"
                  id="fechaNacimiento"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="imagenPerfil" className="form-label">
                  Agregar foto de perfil
                </label>
                <input
                  type="file"
                  className="form-control inputverde"
                  id="imagenPerfil"
                  accept="image/*"
                  onChange={handleImagenPerfilChange}
                />
                {imagenPerfil && (
                  <img
                    src={URL.createObjectURL(imagenPerfil)}
                    alt="Vista previa de la imagen"
                    className="img-thumbnail mt-3"
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">
                  Ingrese una contraseña
                </label>
                <input
                  type="password"
                  className="form-control inputverde"
                  id="contrasena"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
