import React, { useState } from "react";
import "../../style/registra.css";
const Registrarse = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [imagenPerfil, setImagenPerfil] = useState(null);

  const handleImagenPerfilChange = (e) => {
    // Manejar la carga de la imagen de perfil aquí
    const imagen = e.target.files[0];
    setImagenPerfil(imagen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar acciones de registro aquí, como enviar datos al servidor
    console.log("Datos del formulario:", {
      nombres,
      apellidos,
      telefono,
      correo,
      fechaNacimiento,
      contrasena,
      imagenPerfil,
    });
  };

  return (
    <div className="fondo">
      <div className="container">
        <div className="row justify-content-center align-items-center no-margin ">
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
                  id="contrasena"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
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
