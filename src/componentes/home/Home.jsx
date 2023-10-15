import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "./Home.css";
import Carta from "./Carta";
import img1 from "./media/casa1.jpg";
//import img2 from "./media/casa2.jpg";
import Conocenos from "../pages/conocenos";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bgwhite">
      <div className="naa"></div>
      <br />
      <Container fluid>
        <Row>
          <Col md={7}>
            <Carousel className="carousel-fullwidth">
              <Carousel.Item>
                <img
                  className="d-block w-100 position-relative"
                  src={img1}
                  alt="Primera imagen"
                />
                <div className="carousel-caption-custom">
                  <h3>vendo casa en urbanización san benito</h3>
                  <p>
                    Casa en buen estado, construida hace 5 años, con 5
                    habitaciones y 3 baños y...
                  </p>
                  <Button className="bglime whitetxt" variant="success">
                    Ver
                  </Button>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 position-relative"
                  src={img1}
                  alt="Segunda imagen"
                />
                <div className="carousel-caption-custom">
                  <h3>Título de la Imagen 2</h3>
                  <p>Descripción de la Imagen 2.</p>
                  <Button className="bglime whitetxt" variant="success">
                    Ver
                  </Button>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* Contenido */}
          <Col md={5} className="split-content">
            <h1 className="custom-h1 grandtxt whitetxt">
              Publicación y <br /> Venta de Bienes Raíces
            </h1>
            <div className="search-box">
              <br />
              <Link to="/explore">
                <Button
                  variant="success"
                  className="px-5 bgwhite grandtxt py-3"
                >
                  EXPLORAR
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <br />
        <Row className="mt-5">
          <Col>
            <h1 className="custom-h11">AGREGADO RECIENTEMENTE</h1>
            <Carousel controls={false}>
              <Carousel.Item>
                <Row>
                  {/* Primera instancia de Carta */}
                  <Col md={6}>
                    <Carta />
                  </Col>
                  {/* Segunda instancia de Carta */}
                  <Col md={6}>
                    <Carta />
                  </Col>
                  {/* Tercera instancia de Carta */}
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <br />
        <Row>
          <Conocenos />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
