import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRuler,
  faNewspaper,
  faBook,
  faSearch,
  faX,
  faExclamationCircle,
  faUser,
  faBell,
  faCalendar,
  faMapLocation,
  faHome,
  faToilet,
  faCar,
  faTree,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export function CartaPropi(props) {
  const {
    id,
    titulo,
    desc,
    precio,
    extension,
    departamento,
    municipio,
    localidad,
    referencia,
    usuario,
    cantimg,
    habita,
    bano,
    garage,
    patio,
  } = props.data;
  return (
    <Card className="bgdark whitetxt h-100">
      <Card.Body className="h-100">
        <Row className="h-100">
          <Col md={7} className="m-0 gy-3 h-100 align-items-center pt-auto">
            <h1 className="px-3 text-start titulo">{titulo}</h1>
            <h4 className="px-3 text-start normaltxt">
              {desc.slice(0, 120)}...
            </h4>
            <Row className="text-start px-3">
              <Col>
                <p>
                  <FontAwesomeIcon icon={faRuler} /> {extension} m²
                </p>
              </Col>
              <Col>
                <p>
                  <FontAwesomeIcon icon={faMapLocation} /> {departamento}{" "}
                </p>
              </Col>
              <Col>
                <p>
                  <FontAwesomeIcon icon={faHome} /> {habita}{" "}
                </p>
              </Col>
            </Row>
            <Row className="text-start px-3">
              <Col>
                <p>
                  <FontAwesomeIcon icon={faToilet} /> {bano}
                </p>
              </Col>
              <Col>
                <p>
                  <FontAwesomeIcon icon={faCar} /> {garage}{" "}
                </p>
              </Col>
              <Col>
                <p>
                  <FontAwesomeIcon icon={faTree} /> {patio}{" "}
                </p>
              </Col>
            </Row>
            <Row className="">
              <Col md={8} xl={9}>
                <h1 className=" titulo text-black text-start ps-3 grandtxt">
                  ${precio}
                </h1>
              </Col>
              <Col md={4} xl={3} className=" justify-content-end pe-3">
                <button className="bgmoss  text-center  rounded rounded-pill">
                  <h1>
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-black text-end  "
                    />
                    Ver
                  </h1>
                </button>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="m-0 h-100">
            <Card.Img
              className=" img-fluid h-100 w-100"
              src={id}
              alt="Imagen"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CartaPropi;
