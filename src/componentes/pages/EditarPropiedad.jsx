import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDollar,
  faRuler,
  faCar,
  faTree,
  faToilet,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

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
const RadioBG = {
  backgroundColor: "#939D91",
};
const styledButton = {
  backgroundColor: "#CFC0BD",
  color: "#2A605A",
  border: "3px solid #2A605A",
};

const PublicarPropiedad = () => {
  return (
    <div style={{ backgroundColor: "#939d91" }}>
      <div className="naa"></div>
      <br />
      <Container className="fondocontener2">
        <Row>
          <Col>
            <h1 className="text-center">PUBLICAR PROPIEDAD</h1>
            <h2 className="mb-3">DATOS PRINCIPALES DE LA PROPIEDAD</h2>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={6}>
            <div style={ShowImages}></div>
          </Col>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <label htmlFor="images" className="text-start mb-2 w-100">
                  Ingrese las imágenes
                </label>
                <Form.Control
                  type="file"
                  label="Ingrese las imagenes"
                  className="inputverde"
                  id="images"
                />
              </Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Titulo de la propiedad"
                className="mb-3 mt-3 "
              >
                <Form.Control
                  type="text"
                  placeholder="VENDO CASA EN ..."
                  className="inputverde"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Enlace a algun video en otra plataforma"
                className="mb-3 mt-3"
              >
                <Form.Control
                  type="text"
                  placeholder="https://casvideo"
                  className="inputverde"
                />
              </FloatingLabel>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="inputverde">
                      <FontAwesomeIcon icon={faHouse} />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Ingresa el numero de habitaciones"
                      placeholder="Nº habitaciones"
                      className="inputverde"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="inputverde">
                      <FontAwesomeIcon icon={faDollar} />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Aca se ingresa el precio"
                      placeholder=" 0"
                      className="inputverde"
                    />
                    <InputGroup.Text className="inputverde">
                      .00
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="inputverde">
                      <FontAwesomeIcon icon={faRuler} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      aria-label="Ingresa las medidas"
                      placeholder=" Ingresa las medidas"
                      className="inputverde"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="inputverde">
                      <FontAwesomeIcon icon={faCar} />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Parqueos disponibles"
                      placeholder="Nº parqueos"
                      className="inputverde"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="inputverde">
                      <FontAwesomeIcon icon={faTree} />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Ingresa el numero de patios"
                      placeholder="Nº patios"
                      className="inputverde"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="inputverde">
                      <FontAwesomeIcon icon={faToilet} />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      aria-label="Ingresa el numero de baños"
                      placeholder="Nº baños"
                      className="inputverde"
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
                  className="inputverde"
                />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
        <Row>
          <h2 className="mt-4">DATOS DE UBICACIÓN</h2>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Departamento"
                className="mb-3 mt-3 "
              >
                <Form.Control
                  type="text"
                  placeholder="Santa Ana"
                  className="inputverde"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Municipio"
                className="mb-3 mt-3 "
              >
                <Form.Control
                  type="text"
                  placeholder="Chalchuapa"
                  className="inputverde"
                />
              </FloatingLabel>
              <FloatingLabel
                className="mb-3 mt-3 "
                controlId="floatingTextarea2"
                label="Ubicación exacta"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Ingresa tu ubuicación exacta"
                  style={{ height: "100px" }}
                  className="inputverde"
                />
              </FloatingLabel>
              <label htmlFor="#refe" className="text-start w-100 mb-3">
                Ingrese punto de referencia
              </label>
              <InputGroup className="mb-3">
                <InputGroup.Text className="inputverde">
                  <FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  aria-label="Ingresa la ubicación"
                  placeholder=" Ingresa la ubicación"
                  className="inputverde"
                  id="refe"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mt-4">AGENDAR VISITA A LA PROPIEDAD</h2>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center" xs={12} md={6}>
            <h2>ELEGIR DIAS DE DISPONIBILIDAD</h2>
            <Form className="mt-5 rounded-5" style={RadioBG}>
              {" "}
              <div
                key={`inline-radio`}
                className="my-3 py-3 row justify-content-center"
              >
                <Col xs={4} md={3} lg={3} className="my-2">
                  <Form.Check
                    inline
                    label="L"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-1`}
                    className=""
                  />
                </Col>
                <Col xs={4} md={3} lg={3} className="my-2">
                  <Form.Check
                    inline
                    label="M"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-2`}
                  />
                </Col>
                <Col xs={4} md={3} lg={3} className="my-2">
                  <Form.Check
                    inline
                    label="X"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-3`}
                  />
                </Col>
                <Col xs={4} md={3} lg={2} className="my-2">
                  <Form.Check
                    inline
                    label="J"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-4`}
                  />
                </Col>
                <Col xs={4} md={3} lg={3} className="my-2">
                  <Form.Check
                    inline
                    label="V"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-5`}
                  />
                </Col>
                <Col xs={4} md={3} lg={3} className="my-2">
                  <Form.Check
                    inline
                    label="S"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-6`}
                  />
                </Col>
                <Col xs={4} md={3} lg={3} className="my-2">
                  <Form.Check
                    inline
                    label="D"
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-7`}
                  />
                </Col>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text-center">ELIGE LA HORA</h2>
            <Form>
              <Row className="mb-1">
                <Col>
                  <FloatingLabel
                    className="mb-1 mt-3 "
                    controlId="floatingTextarea2"
                    label="Hora de inicio"
                  >
                    <Form.Control
                      type="number"
                      min={0}
                      max={23}
                      className="inputverde"
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mb-1">
                <Col>
                  <FloatingLabel
                    className="mb-1 mt-3 "
                    controlId="floatingTextarea2"
                    label="Hora de fin"
                  >
                    <Form.Control
                      type="number"
                      min={0}
                      max={23}
                      className="inputverde"
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <h3 className="text-center">Las visitas duran una hora</h3>
            </Form>
          </Col>
        </Row>
        <Button style={styledButton} className="mt-5 mb-5 w-75 grandtxt">
          GUARDAR DATOS DE PROPIEDAD
        </Button>
      </Container>
      <br />
    </div>
  );
};

export default PublicarPropiedad;
