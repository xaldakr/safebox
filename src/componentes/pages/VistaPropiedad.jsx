import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Carousel,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import img1 from "../home/media/casa1.jpg";
import img2 from "../home/media/casa2.jpg";
import { Link } from "react-router-dom";
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

const bg_Propiedad = {
  color: "#CFC0BD",
  backgroundColor: "#586f6b",
};
const styledButton = {
  width: "100%",
  backgroundColor: "#CFC0BD",
  color: "#2A605A",
  textDecoration: "none",
  textAlign: "center",
  padding: "0.4rem",
  border: "3px solid #2A605A",
};

export const VistaPropiedad = () => {
  return (
    <div style={bg_Propiedad}>
      <div className="naa"></div>
      <br />
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Row className="fondocontener3 p-4 rounded-5">
              {" "}
              <Col md={6}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img1}
                      alt="Primera imagen"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img2}
                      alt="Segunda imagen"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img1}
                      alt="Tercera imagen"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md={6}>
                <h1 className="text-center grandtxt2">TITULO DE PROPIEDAD</h1>{" "}
                <br />
                <h2 className="grandtxt">10000.00$</h2>
                <hr />
                <h2 className="text-center">Datos de contacto</h2>
                <h4>Nombre del vendedor: Bryan Vásquez</h4>
                <h4>Correo del vendedor: correo@correo.com</h4>
                <h4>Teléfono del vendedor: 0000-0000</h4>
                <br />
                <h4>
                  <Link
                    to={"agendar"}
                    style={styledButton}
                    className="mt-5 mb-5 w-75 "
                  >
                    Contactar
                  </Link>
                </h4>
              </Col>
            </Row>

            <hr />

            <Row className="fondocontener3 p-4 rounded-5">
              <Col md={6}>
                <div className="mt-5">
                  <h2>Descripción:</h2>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo deleniti exercitationem, ratione recusandae, libero
                    fugit dignissimos animi quibusdam perferendis nam, tempore
                    veritatis optio ex officiis qui alias accusamus voluptate
                    cum?
                  </h4>
                </div>
              </Col>
              <Col md={6}>
                <h2 className="mt-3">Datos</h2>
                <Row>
                  <Col xs={6} md={6} className="mb-3">
                    <div className="mt-3">
                      {" "}
                      <h3 style={{ color: "white" }} className=" d-inline">
                        <FontAwesomeIcon icon={faHouse} /> Habitaciones:{" "}
                      </h3>
                      <h3 className=" d-inline">0</h3>
                    </div>
                  </Col>
                  <Col xs={6} md={6} className="mb-3">
                    <div className="mt-3">
                      {" "}
                      <h3 style={{ color: "white" }} className=" d-inline">
                        <FontAwesomeIcon icon={faToilet} /> Baños:{" "}
                      </h3>
                      <h3 className=" d-inline">0</h3>
                    </div>
                  </Col>
                  <Col xs={6} md={6} className="mb-3">
                    <div className="mt-3">
                      {" "}
                      <h3 style={{ color: "white" }} className=" d-inline">
                        <FontAwesomeIcon icon={faTree} /> Patios:{" "}
                      </h3>
                      <h3 className=" d-inline">0</h3>
                    </div>
                  </Col>
                  <Col xs={6} md={6} className="mb-3">
                    <div className="mt-3">
                      {" "}
                      <h3 style={{ color: "white" }} className=" d-inline">
                        <FontAwesomeIcon icon={faCar} /> Garajes:{" "}
                      </h3>
                      <h3 className=" d-inline">0</h3>
                    </div>
                  </Col>
                  <Col xs={12} md={12} className="mb-3">
                    <div className="mt-3">
                      {" "}
                      <h3 style={{ color: "white" }}>
                        <FontAwesomeIcon icon={faRuler} /> Extensión:
                      </h3>
                      <h3>0 m²</h3>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} className="mt-3">
                <Col xs={12} md={12} className="mb-3">
                  <div>
                    {" "}
                    <h3 style={{ color: "white" }}>Departamento:</h3>
                    <h3> Santa Ana</h3>
                  </div>
                </Col>
                <Col xs={12} md={12} className="mb-3">
                  <div>
                    {" "}
                    <h3 style={{ color: "white" }}>Municipio:</h3>
                    <h3>Chalchuapa</h3>
                  </div>
                </Col>
                <Col>
                  <div>
                    {" "}
                    <h3 style={{ color: "white" }}>Ubicación exacta:</h3>
                    <h5>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum maxime vel, dolor explicabo, magnam tenetur quos quia
                      nulla voluptatibus repellat illum, minima laboriosam sunt
                      laudantium iste harum? Architecto, dicta facere.
                    </h5>
                  </div>
                </Col>
              </Col>
              <Col xs={12} md={6} className="mt-3">
                <Col xs={12} md={12}>
                  <iframe
                    width="100%"
                    height="415"
                    src="https://www.youtube.com/embed/iVCy2Frm21I?si=VJsnXLpz5a4QCMxd"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VistaPropiedad;
