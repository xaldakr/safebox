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

const bg_Propiedad = {
  color: "#CFC0BD",
  backgroundColor: "#586f6b",
};
const styledButton = {
  width: "100%",
  backgroundColor: "#CFC0BD",
  color: "#2A605A",
  border: "3px solid #2A605A",
};
const styledButton = {
  width: "100%",
  backgroundColor: "#CFC0BD",
  color: "#2A605A",
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
              <Col xs={6} md={6} className="mb-3">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {" "}
                  <h3>Habitaciones:</h3>
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
                  <h3>Baños:</h3>
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
                  <h3>Patios:</h3>
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
                  <h3>Garajes:</h3>
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
                <h3>Extensión:</h3>
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
                <h3>Departamento:</h3>
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
                <h3>Municipio:</h3>
                <h3>Chalchuapa</h3>
              </div>
            </Col>
            <Col xs={12} md={12} className="mb-3">
              <div
                style={{
                  display: "flex",
                }}
              >
                {" "}
                <h3>Punto de referencia:</h3>
              </div>
            </Col>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text-center">Agendar</h2>
            <Form
              style={{
                border: "3px solid black",
                borderRadius: "10px",
              }}
            >
              <FloatingLabel
                controlId="floatingInput"
                label="Tu nombre"
                className="mb-3 mt-3"
                style={{ width: "90%", margin: "0% 5%" }}
              >
                <Form.Control type="text" placeholder="nombre" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Tu Correo"
                className="mb-3 mt-3"
                style={{ width: "90%", margin: "0% 5%" }}
              >
                <Form.Control type="email" placeholder="correo@correo.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Tu teléfono"
                className="mb-3 mt-3"
                style={{ width: "90%", margin: "0% 5%" }}
              >
                <Form.Control type="text" placeholder="0000-0000" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
                <Form.Control
                  as="textarea"
                  placeholder="Deja un comentario aqui"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Button style={styledButton} className="mt-5 mb-5">
                Contactar
              </Button>
            </Form>
            <iframe
              title="Ubicación en el Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.596340267907!2d-89.55097142569616!3d13.982616191909331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62e6202f8eeca1%3A0x976b0fd1a95a4d8a!2sUniversidad%20Cat%C3%B3lica%20de%20El%20Salvador!5e0!3m2!1ses-419!2ssv!4v1693027294047!5m2!1ses-419!2ssv"
              width="100%"
              height="450"
              style={{
                border: "2px solid #CFC0BD ",
                borderRadius: "10px ",
                marginTop: "5%",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              {" "}
              <h3>Ubicación exacta:</h3>
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
