import React from "react";

const Ayuda = () => {
  return (
    <div className="container mt-5">
      <h1>Preguntas Frecuentes</h1>
      <div className="accordion" id="faqAccordion">
        {/* Pregunta 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeading1">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqCollapse1"
              aria-expanded="true"
              aria-controls="faqCollapse1"
            >
              Pregunta 1: ¿Cómo puedo comprar una propiedad?
            </button>
          </h2>
          <div
            id="faqCollapse1"
            className="accordion-collapse collapse show"
            aria-labelledby="faqHeading1"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Respuesta 1: Para comprar una propiedad, debes...
            </div>
          </div>
        </div>

        {/* Pregunta 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="faqHeading2">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqCollapse2"
              aria-expanded="false"
              aria-controls="faqCollapse2"
            >
              Pregunta 2: ¿Qué tipos de propiedades ofrecen?
            </button>
          </h2>
          <div
            id="faqCollapse2"
            className="accordion-collapse collapse"
            aria-labelledby="faqHeading2"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Respuesta 2: Ofrecemos una variedad de propiedades, como casas,
              apartamentos, y más...
            </div>
          </div>
        </div>

        {/* Agregar más preguntas y respuestas aquí */}
      </div>
    </div>
  );
};

export default Ayuda;
