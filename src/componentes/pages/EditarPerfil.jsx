import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//llamando obbjetos staticos
import * as datos from "../secciones/staticdata";
import { CartaPropiEdit } from "../secciones/CartapropiEdit";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import pfp from "../../multimedia/images/estaticos/general/userplaceholder.png";

const EditarPerfil = () => {
  //estilos separados
  const bg_editPorfile = {
    backgroundColor: "#7F8D84",

    borderRadius: "10px",
  };

  const flex_config = {
    flexDirection: "column",
    width: "100%",
    gap: "4vh",
    textAlign: "center",
    margin: "0 0 5% 0",
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
      <Container>
        <div className="naa"></div>
        <Row className="mt-5 ">
          <Col style={bg_editPorfile} xs={12} md={12} className="mb-4">
            <h1 style={{ color: "#CFC0BD" }} className="grandtxt">
              MÍ PERFIL
            </h1>
            <Row className=" justify-content-center w-100">
              <img
                src={pfp}
                alt="imagen del usuario"
                className=" w-25 img-fluid"
              />
            </Row>
            <input style={{ marginLeft: "25%", width: "50%" }} type="file" />
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="whitetxt">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="José Luis"
                  className="inputverde"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="whitetxt">Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Alvares Gutie"
                  className="inputverde"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="whitetxt">Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0000-0000"
                  className="inputverde"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="whitetxt">
                  Correo electronico:
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo@correo.com"
                  className="inputverde"
                />
                <Form.Text className="whitetxt">
                  Estos datos nunca se compartiran con nadie.
                </Form.Text>
              </Form.Group>
              <input type="submit" style={button_edit} value="Editar" />
            </Form>
          </Col>
          <Col xs={12} md={12}>
            <section>
              <h2 style={{ color: "#CFC0BD", textAlign: "center" }}>
                Mis publicaciónes
              </h2>
              <br />
              <Link to="/publish">
                <button className="bgmoss  text-center  rounded rounded-pill p-4 ">
                  <h1>
                    <FontAwesomeIcon
                      icon={faAdd}
                      className="text-black text-end  "
                    />
                  </h1>
                </button>
              </Link>
            </section>
            <br />
            <div>
              <CartaPropiEdit data={datos.publi1} />
            </div>
            <Pagination
              className="w-100 justify-content-center mt-5 "
              size="md"
            >
              <Pagination.First className="bggreen whitetxt" />
              <Pagination.Prev className="bggreen whitetxt" />
              <Pagination.Item className="bggreen whitetxt" active>
                {1}
              </Pagination.Item>
              <Pagination.Item className="bggreen whitetxt">2</Pagination.Item>
              <Pagination.Item className="bggreen whitetxt">3</Pagination.Item>
              <Pagination.Item className="bggreen whitetxt">4</Pagination.Item>
              <Pagination.Item className="bggreen whitetxt">5</Pagination.Item>
              <Pagination.Next className="bggreen whitetxt" />
              <Pagination.Last className="bggreen whitetxt" />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditarPerfil;
