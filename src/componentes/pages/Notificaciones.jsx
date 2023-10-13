import React, { useState } from "react";
import { Container, ListGroup, Card, Button } from "react-bootstrap";
import aguafot from "../../multimedia/images/estaticos/general/safebox.png";
function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      titulo: "Vendo casa en jardín loma alta, Santa Ana",
      contenido: "Reserva del Comprador",
      fecha: "2017-12-2",
      hora: "4:00",
      namcomprador: "Fernando Musto",
      namevendedor: "Rodrigo",
      vence: "2018-3-12",
    },
    {
      id: 2,
      titulo: "Vendo casa en la campanera, solo interesados, sean serios",
      contenido: "Reserva del Comprador",
      fecha: "2017-12-2",
      hora: "4:00",
      namcomprador: "Xavier Alexander",
      namevendedor: "Rodrigo",
      vence: "2018-3-12",
    },
    {
      id: 3,
      titulo: "Vendo casa en jardín loma alta, Santa Ana",
      contenido: "Reserva del Comprador",
      fecha: "2017-12-2",
      hora: "4:00",
      namcomprador: "Bryan Farfan",
      namevendedor: "Rodrigo",
      vence: "2018-3-12",
    },
    {
      id: 4,
      titulo: "Vendo casa Campanera",
      contenido: "Reserva del Comprador",
      fecha: "2017-12-2",
      hora: "4:00",
      namcomprador: "Carlos Castaneda",
      namevendedor: "Rodrigo",
      vence: "2018-3-12",
    },
    {
      id: 5,
      titulo: "Vendo casa Santa Lucia",
      contenido: "Reserva del Comprador",
      fecha: "2017-12-2",
      hora: "4:00",
      namcomprador: "Deku",
      namevendedor: "Rodrigo",
      vence: "2018-3-12",
    },
  ]);
  const [notificacionSeleccionada, setNotificacionSeleccionada] =
    useState(null);

  const handleNotificacionClick = (notificacion) => {
    setNotificacionSeleccionada(notificacion);
  };

  const cerrarDetalle = () => {
    setNotificacionSeleccionada(null);
  };

  return (
    <Container>
      <div className="naa"></div>
      <h2 className="titulonoti">Notificaciones</h2>
      <div className="d-flex">
        <div className="w-50 p-3 ">
          <ListGroup className="BACKnoti">
            {notificaciones.map((notificacion) => (
              <ListGroup.Item
                key={notificacion.id}
                className="text-start BACKnoti"
              >
                <strong>{notificacion.titulo}</strong>

                <Button
                  className="botoncitoNoti float-end"
                  variant="success"
                  onClick={() => handleNotificacionClick(notificacion)}
                >
                  Ver Detalle
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        {notificacionSeleccionada && (
          <div className="w-50 p-3">
            <Card>
              <Card.Body className="BACKnoti">
                <div className="imagrelativ">
                  <img src={aguafot} className="AGUA image-fluid" alt="" />
                </div>
                <div className="PAriba">
                  <Card.Title>
                    <strong>{notificacionSeleccionada.titulo}</strong>
                  </Card.Title>
                  <Card.Text>
                    <strong>{notificacionSeleccionada.contenido}</strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>
                      Nombre del comprador:
                      {notificacionSeleccionada.namcomprador}
                    </strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Fecha:{notificacionSeleccionada.fecha}</strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Hora:{notificacionSeleccionada.hora}</strong>
                  </Card.Text>

                  <Card.Text>
                    <strong>
                      Nombre del vendedor:
                      {notificacionSeleccionada.namevendedor}
                    </strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>
                      Fecha de vencimiento:{notificacionSeleccionada.vence}
                    </strong>
                  </Card.Text>
                  <Button variant="danger" onClick={cerrarDetalle}>
                    Cerrar Detalle
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Notificaciones;
