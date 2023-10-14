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
          <Col xs={12} md={6}>
            <h1 className="text-center" style={{ color: "black" }}>
              Titulo de la propiedad
            </h1>{" "}
            <h2
              style={{
                color: "#141223",
                fontSize: "35px",
                textAlign: "center",
                marginBottom: "50px",
              }}
            >
              10000.00$
            </h2>
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
            <div className="mt-5">
              <h3 style={{ color: "black" }}>Descripción:</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                deleniti exercitationem, ratione recusandae, libero fugit
                dignissimos animi quibusdam perferendis nam, tempore veritatis
                optio ex officiis qui alias accusamus voluptate cum?
              </p>
            </div>
            <Row>
              <h2 style={{ color: "black" }}>Datos</h2>
              <Col xs={6} md={6} className="mb-3">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {" "}
                  <h3 style={{ color: "white" }}>Habitaciones:</h3>
                  <h3>0</h3>
                </div>
              </Col>
              <Col xs={6} md={6} className="mb-3">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {" "}
                  <h3 style={{ color: "white" }}>Baños:</h3>
                  <h3>0</h3>
                </div>
              </Col>
              <Col xs={6} md={6} className="mb-3">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {" "}
                  <h3 style={{ color: "white" }}>Patios:</h3>
                  <h3>0</h3>
                </div>
              </Col>
              <Col xs={6} md={6} className="mb-3">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {" "}
                  <h3 style={{ color: "white" }}>Garajes:</h3>
                  <h3>0</h3>
                </div>
              </Col>
            </Row>
            <Col xs={12} md={12} className="mb-3">
              <div
                style={{
                  display: "flex",
                }}
              >
                {" "}
                <h3 style={{ color: "white" }}>Extensión:</h3>
                <h3>0x0</h3>
              </div>
            </Col>
            <Col xs={12} md={12} className="mb-3">
              <div
                style={{
                  display: "flex",
                }}
              >
                {" "}
                <h3 style={{ color: "white" }}>Departamento:</h3>
                <h3> Santa Ana</h3>
              </div>
            </Col>
            <Col xs={12} md={12} className="mb-3">
              <div
                style={{
                  display: "flex",
                }}
              >
                {" "}
                <h3 style={{ color: "white" }}>Municipio:</h3>
                <h3>Chalchuapa</h3>
              </div>
            </Col>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text-center" style={{ color: "black" }}>
              Datos de contacto
            </h2>
            <section
              className="mt-5"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h4>Nombre del vendedor: Bryan Vásquez</h4>
              <h4>correo del vendedor: correo@correo.com</h4>
              <h4>Teléfono del vendedor: 0000-0000</h4>
              <Link to={"agendar"} style={styledButton} className="mt-5 mb-5">
                Contactar
              </Link>
            </section>
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
        </Row>
        <Row>
          <Col>
            <div>
              {" "}
              <h3 style={{ color: "black", textAlign: "center" }}>
                Ubicación exacta:
              </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                maxime vel, dolor explicabo, magnam tenetur quos quia nulla
                voluptatibus repellat illum, minima laboriosam sunt laudantium
                iste harum? Architecto, dicta facere.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VistaPropiedad;
