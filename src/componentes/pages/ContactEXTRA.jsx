import React, { useState } from "react";
import { Container, Form, Button, Alert, Col } from "react-bootstrap";
function Contactanos() {
  const [comentario, setComentario] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [formularioIncompleto, setFormularioIncompleto] = useState(false);
  const handleEnviarClick = () => {
    if (comentario && correo) {
      setMensajeEnviado(true);
      setFormularioIncompleto(false);
    } else {
      setFormularioIncompleto(true);
    }
  };

  return (
    <div className="fondoContactd">
      <div className="DifuminadoContact">
        {" "}
        <Container className="contiContact p-10">
          <h2>Contactanos</h2>
          {mensajeEnviado && (
            <Alert variant="success">¡Mensaje enviado correctamente!</Alert>
          )}
          {formularioIncompleto && (
            <Alert variant="danger">¡Por favor complete el formulario!</Alert>
          )}
          <Form>
            <Form.Group as={Col} controlId="comentario">
              <Form.Label>Comentario:</Form.Label>
              <Form.Control
                as="textarea"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="correo">
              <Form.Label>Ingrese su correo:</Form.Label>
              <Form.Control
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" onClick={handleEnviarClick}>
              Enviar
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Contactanos;
