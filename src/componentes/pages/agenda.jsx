import { useState } from "react";
import React from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

function Agenda() {
  const [Fecha, setFecha] = useState(new Date());
  const [minDate] = useState(new Date());

  const onChage = (fecha) => {
    setFecha(fecha);
  };

  return (
    <div className="agenda-container">
      <Container>
        <h1 className="agenda-heading">AGENDAR VISITA</h1>
        <br />
        <Row>
          <Col md={6}>
            <h2>ELEGIR FECHA:</h2>
            <br />
            <DatePicker
              selected={Fecha}
              onChange={(fecha) => onChage(fecha)}
              minDate={minDate}
              inline
            />
          </Col>
          <Col md={6} className=" align-items-center">
            <Row className="justify-content-center">
              {" "}
              <div>
                <h2>ELEGIR LA HORA DE LLEGADA:</h2>
                <br />
              </div>
              <Form.Control
                type="number"
                min={0}
                max={23}
                className="inputverde w-50 float-none"
              />
            </Row>
            <br />
            <br />
            <Button variant="success" className="px-5 bgwhite grandtxt py-3">
              AGENDAR
            </Button>
          </Col>
        </Row>
        <div className="naa"></div>
        <div className="naa"></div>
      </Container>
    </div>
  );
}

export default Agenda;
