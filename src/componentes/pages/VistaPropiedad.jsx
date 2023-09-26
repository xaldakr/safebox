import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Carousel,
} from "react-bootstrap";

const bg_Propiedad = {
  backgroundColor: "#586F6B",
  color: "#CFC0BD",
};

const VistaPropiedad = () => {
  return (
    <div style={bg_Propiedad}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="text-center">Titulo de la propiedad</h1>{" "}
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
                  src="imagen1.jpg"
                  alt="Primera imagen"
                />
                <Carousel.Caption>
                  <h3>Título de la primera imagen</h3>
                  <p>Descripción de la primera imagen.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="imagen2.jpg"
                  alt="Segunda imagen"
                />
                <Carousel.Caption>
                  <h3>Título de la segunda imagen</h3>
                  <p>Descripción de la segunda imagen.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="imagen3.jpg"
                  alt="Tercera imagen"
                />
                <Carousel.Caption>
                  <h3>Título de la tercera imagen</h3>
                  <p>Descripción de la tercera imagen.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="mt-5">
              <h3>Descripción:</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                deleniti exercitationem, ratione recusandae, libero fugit
                dignissimos animi quibusdam perferendis nam, tempore veritatis
                optio ex officiis qui alias accusamus voluptate cum?
              </p>
            </div>
            <Row>
              <h2>Datos</h2>
              <Col xs={12} md={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <h3>Habitaciones:</h3>
                  <h3>0</h3>
                </div>
              </Col>
              <Col xs={12} md={6}></Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Form></Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VistaPropiedad;
