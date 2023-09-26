import React from "react";
import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";
import "./Home.css";
import img1 from "./media/casa1.jpg";
import img2 from "./media/casa2.jpg";

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
                  <Button
                    style={{ backgroundColor: "#EBEBEB", color: "#2A605A" }}
                  >
                    Ver
                  </Button>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 position-relative"
                  src={img2}
                  alt="Segunda imagen"
                />
                <div className="carousel-caption-custom">
                  <h3>Título de la Imagen 2</h3>
                  <p>Descripción de la Imagen 2.</p>
                  <Button
                    style={{ backgroundColor: "#EBEBEB", color: "#2A605A" }}
                  >
                    Ver
                  </Button>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* Contenido */}
          <Col md={5} className="split-content">
            <h1 className="custom-h1">Publicación y Venta de Bienes Raíces</h1>
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar..."
                className="form-control custom-input-small mb-2 w-100" // Añade una clase para el estilo personalizado
              />
              <Button
                style={{
                  backgroundColor: "#EBEBEB",
                  color: "#2A605A",
                  height: "9vh",
                }}
              >
                EXPLORAR
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1 className="custom-h1">AGREGADO RECIENTEMENTE</h1>
            <Carousel>
              <Carousel.Item>
                <Row>
                  {/* Tarjeta 1 */}
                  <Col md={4}>
                    <Card className="mb-4 custom-card">
                      <Card.Img
                        variant="top"
                        src={img1}
                        alt="Imagen de propiedad"
                      />
                      <Card.Body>
                        <Card.Title>
                          Casa en venta el palmar negociable
                        </Card.Title>
                        <Card.Text>
                          Vendo tremenda casa enSanta Ana el palmar porque me
                          pica la p...
                        </Card.Text>
                        <Card.Text>$ 30,000</Card.Text>
                        <Button variant="primary" className="custom-button">
                          Ver Más
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* Tarjeta 2 */}
                  <Col md={4}>
                    <Card className="mb-4 custom-card">
                      <Card.Img
                        variant="top"
                        src={img1}
                        alt="Imagen de propiedad"
                      />
                      <Card.Body>
                        <Card.Title>
                          Vendo casa en el trébol sean serios
                        </Card.Title>
                        <Card.Text>
                          Vendo bonita casa en Santa Ana tiene 16 baños y una
                          ducha..
                        </Card.Text>
                        <Card.Text>$ 300,000</Card.Text>
                        <Button variant="primary" className="custom-button">
                          Ver Más
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* Tarjeta 3 */}
                  <Col md={4}>
                    <Card className="mb-4 custom-card">
                      <Card.Img
                        variant="top"
                        src={img1}
                        alt="Imagen de propiedad"
                      />
                      <Card.Body>
                        <Card.Title>Casa Metapan</Card.Title>
                        <Card.Text>
                          Casa Metapan, Casa Metapan bonita casa con vacas
                        </Card.Text>
                        <Card.Text>$ 510000,000</Card.Text>
                        <Button variant="primary" className="custom-button">
                          Ver Más
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
