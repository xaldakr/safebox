import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, InputGroup } from "react-bootstrap";
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
function CartaPropi(props) {
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
    <Card className="bgdark whitetxt">
      <Row>
        <Col md={7}>
          <Card.Body>
            <h1 className="px-3 text-start titulo">{titulo}</h1>
            <h4 className="px-3 text-start normaltxt">{desc.slice(0, 120)}</h4>
            <Row>
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
            <Row>
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
                <h1 className=" titulo text-black text-start ps-3">{precio}</h1>
              </Col>
              <Col md={4} xl={3} className=" justify-content-end pe-3">
                <Button className="bgmoss btn-outline-success text-end">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="whitetxt text-end grandtxt2"
                  />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Col>
        <Col md={5}>
          <Card.Img
            src={`../../multimedia/images/estaticos/general/casa${
              id == 2 ? 1 : 4
            }`}
            alt="Imagen"
          />
        </Col>
      </Row>
    </Card>
  );
}

export default CartaPropi;
