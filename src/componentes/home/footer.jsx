import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function CustomFooter() {
  return (
    <footer className="custom-footer py-1" style={{ backgroundColor: '#586F6B' }}>
      <Container>
        <Row className="justify-content-center"> {/* Agrega la clase para centrar horizontalmente */}
          <Col md={2}>
            <h5 className="mb-8">NUESTROS NOMBRES</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">XAVIER AVILA</a></li>
              <li><a href="/" className="text-light text-decoration-none">FERNANDO MUSTO</a></li>
              <li><a href="/" className="text-light text-decoration-none">CARLOS CASTANEDA</a></li>
              <li><a href="/" className="text-light text-decoration-none">BRYAN FARFAN</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="mb-8">ACCIONES</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">SAFEBOX</a></li>
              <li><a href="/" className="text-light text-decoration-none">CONOCENOS</a></li>
              <li><a href="/" className="text-light text-decoration-none">CONTACTANOS</a></li>
              <li><a href="/" className="text-light text-decoration-none">EXPLORAR</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="mb-8">REDES SOCIALES</h5>
            <Button variant="primary" className="mb-3 d-block">
              <i className="fab fa-facebook-f"></i> Facebook
            </Button>
            <Button variant="info" className="d-block">
              <i className="fab fa-twitter"></i> Twitter
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4">
        &copy; SAFEBOX, 2023. All rights reserved.
      </div>
    </footer>
  );
}

export default CustomFooter;




