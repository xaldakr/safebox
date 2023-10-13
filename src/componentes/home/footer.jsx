import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomFooter() {
  return (
    <footer
      className="custom-footer py-1"
      style={{ backgroundColor: "#2a605a" }}
    >
      <Container>
        <br />
        <Row className="justify-content-center whitetxt">
          <Col md={3}>
            <a
              href="https://youtu.be/sLVBCeZ7NjQ?si=ov7x038BS0XCC1e_"
              className="nodecoa"
            >
              <h4>
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </h4>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://youtu.be/sLVBCeZ7NjQ?si=ov7x038BS0XCC1e_"
              className="nodecoa"
            >
              <h4>
                <FontAwesomeIcon icon={faYoutube} /> Youtube
              </h4>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://youtu.be/sLVBCeZ7NjQ?si=ov7x038BS0XCC1e_"
              className="nodecoa"
            >
              <h4>
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </h4>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://youtu.be/sLVBCeZ7NjQ?si=ov7x038BS0XCC1e_"
              className="nodecoa"
            >
              <h4>
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </h4>
            </a>
          </Col>
        </Row>
        <hr />
        <Row>
          {" "}
          {/* Agrega la clase para centrar horizontalmente */}
          <Col md={4}>
            <h2 className="mb-8 whitetxt">
              &copy; SAFEBOX, 2023. <br /> All rights reserved.
            </h2>
          </Col>
          <Col md={4}>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  XAVIER AVILA
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  FERNANDO MUSTO
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  CARLOS CASTANEDA
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  BRYAN FARFAN
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  SAFEBOX
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  CONOCENOS
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  CONTACTANOS
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  EXPLORAR
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default CustomFooter;
