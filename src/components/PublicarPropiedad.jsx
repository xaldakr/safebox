import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

//estilos personalizados para la sección de Publicar y editar propiedad
const backgroundColor = {
  backgroundColor: "#2A605A",
  color: "#CFC0BD",
};
const ShowImages = {
  backgroundColor: "#D1D2D2",
  width: "100%",
  height: "100%",
  marginBottom: "5%",
};

const PublicarPropiedad = () => {
  return (
    <div style={{ backgroundColor: "#939d91" }}>
      <Container style={backgroundColor}>
        <Row>
          <Col>
            <h1 className="text-center">PUBLICAR PROPIEDAD</h1>
            <h2 className="mb-3">DATOS PRINCIPALES DE LA PROPIEDAD</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div style={ShowImages}></div>
          </Col>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Titulo de la propiedad"
                className="mb-3 mt-3"
              >
                <Form.Control type="text" placeholder="VENDO CASA EN ..." />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Enlace a algun video en otra plataforma"
                className="mb-3 mt-3"
              >
                <Form.Control type="text" placeholder="https://casvideo" />
              </FloatingLabel>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>🏠</InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Ingresa el numero de habitaciones"
                      placeholder="Nº habitaciones"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Aca se ingresa el precio"
                      placeholder=" 0"
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>📏</InputGroup.Text>
                    <Form.Control
                      type="text"
                      aria-label="Ingresa las medidas"
                      placeholder=" Ingresa las medidas"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>🅿️</InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Parqueos disponibles"
                      placeholder="Nº parqueos"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>🌼</InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Ingresa el numero de patios"
                      placeholder="Nº patios"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>🚽</InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Ingresa el numero de baños"
                      placeholder="Nº baños"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Descripción de la propiedad"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Deja un comentario aqui"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
        <Row>
          <h2 className="mt-4">DATOS DE UBICACIÓN</h2>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <iframe
              title="Ubicación en el Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.596340267907!2d-89.55097142569616!3d13.982616191909331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e6202f8eeca1%3A0x976b0fd1a95a4d8a!2sUniversidad%20Cat%C3%B3lica%20de%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1693027294047!5m2!1ses-419!2ssv"
              width="100%"
              height="450"
              style={{ border: "2px solid #CFC0BD ", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col xs={12} md={6}>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Departamento"
                className="mb-3 mt-3"
              >
                <Form.Control type="text" placeholder="Santa Ana" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Municipio"
                className="mb-3 mt-3"
              >
                <Form.Control type="text" placeholder="Chalchuapa" />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3 mt-3"
                controlId="floatingTextarea2"
                label="Ubicación exacta"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Ingresa tu ubuicación exacta"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <InputGroup className="mb-3">
                <InputGroup.Text>📍</InputGroup.Text>
                <Form.Control
                  type="text"
                  aria-label="Ingresa la ubicación"
                  placeholder=" Ingresa la ubicación"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PublicarPropiedad;
