import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../../style/ayuda.css";
import LOGSA from "../../multimedia/images/estaticos/general/AYUDA/log.png";
import REGISA from "../../multimedia/images/estaticos/general/AYUDA/Registra.png";
import EDITP from "../../multimedia/images/estaticos/general/AYUDA/editperf.png";
import EXPLOTE from "../../multimedia/images/estaticos/general/AYUDA/explorar.png";
import "../../App.css";
const Ayuda = () => {
  return (
    <div className="fondoayuda">
      <div className="container mt-5">
        <div className="naa"></div>
        <div className="accordion" id="faqAccordion">
          <h1 className="acortitulo">Preguntas Frecuentes</h1>
          <Accordion className="mi-accordion">
            {/* Pregunta 1 */}
            <Accordion.Item className="itemc">
              <Accordion.Header className="mi-header">
                ¿Como iniciar sesión?
              </Accordion.Header>
              <Accordion.Body className="mi-body">
                En la parte superior derecha encontraras el boton de inicar
                sesión.
                <img src={LOGSA} style={{ width: "100%" }} alt="" />
              </Accordion.Body>
            </Accordion.Item>
            {/* Pregunta 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header className="mi-header">
                ¿Como utilizar la barra de busqueda?
              </Accordion.Header>
              <Accordion.Body className="mi-body">
                En la barra de busqueda puedes poner el nombre de la propiedad.
                <img src={EXPLOTE} style={{ width: "100%" }} alt="" />
              </Accordion.Body>
            </Accordion.Item>
            {/* Pregunta 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header className="mi-header">
                ¿Comó editar mi perfil?
              </Accordion.Header>
              <Accordion.Body className="mi-body">
                En la siguiente pagina se mostrara a detalle tu información.
                <img src={EDITP} style={{ width: "100%" }} alt="" />
              </Accordion.Body>
            </Accordion.Item>
            {/* Pregunta 3 */}
            <Accordion.Item eventKey="3">
              <Accordion.Header className="mi-header">
                ¿Comó registrarse?
              </Accordion.Header>
              <Accordion.Body className="mi-body">
                Rellenar todos los campos que se le piden no dejar ninguno en
                blanco.
                <img src={REGISA} style={{ width: "100%" }} alt="" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
