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
  faPencilAlt,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export function CartaPropiEdit(props) {
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
    faClock,
  } = props.data;
  return (
    <Card className="bgdark whitetxt ">
      <Card.Body className="">
        <Row className="">
          <Col md={7} className="m-0 gy-3 align-items-center pt-auto mb-2">
            <h1 className="px-3 text-start titulo">{titulo}</h1>
            <h4 className="px-3 text-start normaltxt">
              {desc.slice(0, 170)}...
            </h4>
            <br />
            <Row className="text-start px-3">
              <Col>
                <h4>
                  <FontAwesomeIcon icon={faEye} /> {extension}
                </h4>
              </Col>
              <Col>
                <h4>
                  <FontAwesomeIcon icon={faPencilAlt} /> 1213
                </h4>
              </Col>
              <Col>
                <h4>
                  <FontAwesomeIcon icon={faSun} /> 7
                </h4>
              </Col>
            </Row>
            <br />
            <Row className="">
              <Col md={8} xl={9}>
                <h1 className=" titulo whitetxt text-start ps-3 grandtxt0">
                  ${precio}
                </h1>
              </Col>
              <Col md={4} xl={3} className=" justify-content-end pe-3">
                <Link to="/verprop">
                  <button className="bgmoss  text-center  rounded rounded-pill p-4 float-end">
                    <h1>
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="text-black text-end  "
                      />
                      Editar
                    </h1>
                  </button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="m-0 ">
            <Card.Img
              className=" img-fluid w-75 h-100 float-md-end imaginaimg"
              src={id}
              alt="Imagen"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CartaPropiEdit;
