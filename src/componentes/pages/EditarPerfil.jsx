import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
//llamando obbjetos staticos
import * as datos from "../secciones/staticdata";
import { CartaPropi } from "../secciones/cartapropi";

const EditarPerfil = () => {
  //estilos separados
  const bg_aside_editPorfile = {
    backgroundColor: "#7F8D84",
    minHeight: "100vh",
  };

  const flex_config = {
    flexDirection: "column",
    width: "100%",
    gap: "4vh",
    textAlign: "center",
    margin: "0 0 10% 0",
  };

  const button_edit = {
    width: "80%",
    margin: "1% 10%",
    borderRadius: "10px",
    backgroundColor: "#CFC0BD",
    padding: "0.3rem",
    color: "#586F6B",
    fontWeight: "700",
    fontSize: "1.4em",
  };

  return (
    <div>
      <Container style={{ marginLeft: 0 }}>
        <Row>
          <Col style={bg_aside_editPorfile} xs={12} md={5}>
            <section style={flex_config} className="d-flex fle">
              <h2 style={{ color: "#CFC0BD" }}>MÍ PERFIL</h2>
              <img src="" alt="imagen del usuario" />
              <input style={{ marginLeft: "25%", width: "50%" }} type="file" />
            </section>

            <Form>
              <Form.Group className="mb-4">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Actualiza tu nombre" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Actualiza tu Apellido" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Actualiza tu Teléfono" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Correo electronico:</Form.Label>
                <Form.Control type="email" placeholder="Actualiza tu correo" />
                <Form.Text className="text-muted">
                  Estos datos nunca se compartiran con nadie.
                </Form.Text>
              </Form.Group>
              <input type="submit" style={button_edit} value="Editar" />
            </Form>
          </Col>
          <Col xs={12} md={7}>
            <section>
              <h2 style={{ color: "#CFC0BD", textAlign: "center" }}>
                Mis publicaciónes
              </h2>
            </section>
            <CartaPropi data={datos.publi1} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditarPerfil;
