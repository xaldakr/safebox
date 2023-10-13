import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { CartaPropi } from "../secciones/cartapropi";
import Pagination from "react-bootstrap/Pagination";
import {
  Col,
  Container,
  Button,
  Form,
  FloatingLabel,
  Row,
  Offcanvas,
} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import * as datos from "../secciones/staticdata";

export const Explorar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className=" nox">
      <div className="naa"></div>
      <div className="">
        <Row>
          {/*Zona de Controles*/}
          <Offcanvas
            show={show}
            onHide={handleClose}
            className="bgmoss px-3 whitetxt spacecontrol"
          >
            <br />
            <Row className="">
              <Col md={8} xl={9} xs={7}>
                <h1 className="grandtxt titulo text-black text-start ps-3">
                  Buscar{" "}
                </h1>
              </Col>
              <Col
                md={4}
                xl={3}
                xs={5}
                className=" justify-content-end pe-3 align-items-end"
              >
                <Button className="bgmoss btn-outline-success text-center ms-auto h-100">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="whitetxt text-end grandtxt text-black"
                  />
                </Button>
              </Col>
            </Row>
            <br />
            <Form className="text-start px-3 normaltxt">
              <h5 className=" text-black ">
                <b>Departamento</b>
              </h5>
              <Form.Select aria-label="Depas" className="bglime">
                <option>San Salvador</option>
                <option value="1">Santa Ana</option>
                <option value="2">La Libertad</option>
                <option value="3">San Miguel</option>
                <option value="4">Santa Ana</option>
                <option value="5">Sonsonate</option>
                <option value="6">Usulután</option>
                <option value="7">Ahuachapán</option>
                <option value="8">La Paz</option>
                <option value="9">Morazán</option>
                <option value="10">San Vicente</option>
                <option value="11">Chalchuapa</option>
                <option value="12">La Unión</option>
                <option value="13">Cabañas</option>
              </Form.Select>
              <div key="checkbox" className="mb-3">
                <Form.Check type="checkbox" id={`check-api-checkbox`}>
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label className=" text-black">
                    Priorizar mi ubicación
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <hr className="grueso" />

              <Row>
                <Col>
                  <h5 className=" text-black ">
                    <b>Precio Mínimo</b>
                  </h5>
                  <InputGroup className="mb-3 bglime">
                    <InputGroup.Text className="bglime">$</InputGroup.Text>

                    <Form.Control
                      type="number"
                      placeholder="#######.##"
                      step={0.01}
                      min={10000}
                      max={20000000}
                      className="bglime"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h5 className=" text-black text-end">
                    <b>Precio Máximo</b>
                  </h5>
                  <InputGroup className="mb-3 bglime">
                    <InputGroup.Text className="bglime">$</InputGroup.Text>

                    <Form.Control
                      type="number"
                      placeholder="#######.##"
                      step={0.01}
                      min={10000}
                      max={20000000}
                      className="bglime"
                    />
                  </InputGroup>
                </Col>
              </Row>

              <hr className="grueso" />

              <h5 className=" text-black ">
                <b>Extensión</b>
              </h5>
              <InputGroup className="mb-3 bglime">
                <Form.Control
                  type="number"
                  placeholder="#######"
                  step={1}
                  min={10}
                  max={1000}
                  className="bglime text-end"
                />
                <InputGroup.Text className="bglime">m²</InputGroup.Text>
              </InputGroup>

              <hr className="grueso" />

              <h5 className=" text-black ">
                <b>Habitaciones</b>
              </h5>
              <InputGroup className="mb-3 bglime">
                <InputGroup.Text className="bglime">N°</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder=""
                  step={1}
                  min={1}
                  max={40}
                  className="bglime text-end"
                />
              </InputGroup>

              <hr className="grueso" />

              <h5 className=" text-black ">
                <b>Baños</b>
              </h5>
              <InputGroup className="mb-3 bglime">
                <InputGroup.Text className="bglime">N°</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder=""
                  step={1}
                  min={1}
                  max={40}
                  className="bglime text-end"
                />
              </InputGroup>

              <hr className="grueso" />

              <Row>
                <Col>
                  <h5 className=" text-black ">
                    <b>Garage </b>
                  </h5>
                  <InputGroup className="mb-3 bglime">
                    <InputGroup.Text className="bglime">N°</InputGroup.Text>

                    <Form.Control
                      type="number"
                      placeholder=""
                      step={1}
                      min={0}
                      max={20}
                      className="bglime"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h5 className=" text-black text-end">
                    <b>Patios</b>
                  </h5>
                  <InputGroup className="mb-3 bglime">
                    <InputGroup.Text className="bglime">N°</InputGroup.Text>

                    <Form.Control
                      type="number"
                      placeholder=""
                      step={1}
                      min={0}
                      max={20}
                      className="bglime"
                    />
                  </InputGroup>
                </Col>
              </Row>

              <hr className="grueso" />

              <h3 className=" text-black text-start">
                <b>Ordenar Por</b>
              </h3>
              <Form.Select aria-label="Orden" className="bglime">
                <option>Precio ↑</option>
                <option value="1">Precio ↓</option>
                <option value="2">Extensión ↑</option>
                <option value="3">Extensión ↓</option>
                <option value="4">Habitaciones ↑</option>
                <option value="5">Habitaciones ↓</option>
                <option value="6">Baños ↑</option>
                <option value="7">Baños ↓</option>
                <option value="8">Garage ↑</option>
                <option value="9">Garage ↓</option>
                <option value="10">Patios ↑</option>
                <option value="11">Patios ↓</option>
              </Form.Select>
            </Form>
            <br />
          </Offcanvas>
          {/*Zona de Publicaciones*/}
          <Col className="bglime stick">
            <br />
            <Button
              className=" position-fixed btexplore z-1"
              variant="sucess"
              onClick={handleShow}
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="whitetxt text-end grandtxt2 text-black"
              />
            </Button>
            <Container>
              <br />
              <div className="carda">
                <CartaPropi data={datos.publi1} />
              </div>
              <br />
              <div className="carda">
                <CartaPropi data={datos.publi2} />
              </div>
              <br />
              <Pagination className="w-100 justify-content-center " size="md">
                <Pagination.First className="bggreen whitetxt" />
                <Pagination.Prev className="bggreen whitetxt" />
                <Pagination.Item className="bggreen whitetxt" active>
                  {1}
                </Pagination.Item>
                <Pagination.Item className="bggreen whitetxt">
                  2
                </Pagination.Item>
                <Pagination.Item className="bggreen whitetxt">
                  3
                </Pagination.Item>
                <Pagination.Item className="bggreen whitetxt">
                  4
                </Pagination.Item>
                <Pagination.Item className="bggreen whitetxt">
                  5
                </Pagination.Item>
                <Pagination.Next className="bggreen whitetxt" />
                <Pagination.Last className="bggreen whitetxt" />
              </Pagination>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
};
