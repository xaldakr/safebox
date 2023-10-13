import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../style/ayuda.css";
const Ayuda = () => {
  return (
    <div className="fondoayuda">
      <div className="container mt-5">
        <div className="accordion" id="faqAccordion">
          <h1 className="acortitulo">Preguntas Frecuentes</h1>
          <Accordion defaultActiveKey="0" className="mi-accordion">
            {/* Pregunta 1 */}
            <Accordion.Item className="itemc" eventKey="0">
              <Accordion.Header
                style={{ backgroundColor: "#2a605a", color: "#FFFFFF" }}
                className="mi-header"
              >
                ¿Como iniciar sesión?
              </Accordion.Header>
              <Accordion.Body className="mi-body">
                En la parte superior derecha encontraras el boton de inicar
                sesión.
              </Accordion.Body>
            </Accordion.Item>
            {/* Pregunta 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header className="mi-header">
                ¿Como utilizar la barra de busqueda?
              </Accordion.Header>
              <Accordion.Body className="mi-body">
                En la barra de busqueda puedes poner el nombre de la propiedad.
              </Accordion.Body>
            </Accordion.Item>
            {/* Agregar más preguntas y respuestas aquí */}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
