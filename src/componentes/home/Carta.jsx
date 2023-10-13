import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import img2 from "./media/casa2.jpg";
import { Button, Collapse, Row, Badge } from "react-bootstrap";

const Carta = () => {
  // Define tus propios valores para la tarjeta
  const imagen = img2;
  const tipo = "$230,000";
  const titulo = "Vendo casa en colonia san benito";
  const desc = "Descripción creativa para esta tarjeta";
  const fecha = "Santa Ana";
  const lin = "/ruta/para/ver/mas";

  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Card
      className={` bgred rounded-0 border border-3 border-success p-0 m-0 w-200${
        open ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-controls="cartacolapso"
      aria-expanded={open}
    >
      <Card.Img src={imagen} alt={titulo} className="img-fluid w-100 h-600" />
      <Card.ImgOverlay className="fwhite d-flex flex-column justify-content-end m-0 p-0 ">
        <Row className="bgpurpleop m-0 w-100 p-4 fondocontener2">
          <Card.Title>
            {" "}
            <h3>
              <Badge pill bg="dark">
                {tipo}
              </Badge>
              <br />
              {titulo}
            </h3>
          </Card.Title>
          <br />
          <hr />
          <Collapse in={open} className="">
            <div id="cartacolapso">
              <Card.Text>
                {" "}
                <p className="d-none d-lg-block">{desc}</p>{" "}
              </Card.Text>
              <Card.Text>
                <p className="d-none d-lg-block">{fecha}</p>
              </Card.Text>
              <Button
                as={Link}
                to={lin}
                variant="outline-success"
                className="bgred"
              >
                <h5>Ver más...</h5>
              </Button>
            </div>
          </Collapse>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Carta;
