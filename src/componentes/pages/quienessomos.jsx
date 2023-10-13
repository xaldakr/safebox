import React from "react";
import bg from "../home/media/bgQuienes.mp4";

function QuienesSomos() {
  return (
    <div className="quienes-somos-page">
         <video autoPlay loop muted className="video-bg">
        <source src={bg} type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <div className="quienes-somos-overlay"></div>
      <div className="quienes-somos-content">
        <h77 style={{ textAlign: "left" }}>QUIENES SOMOS</h77>
        <div className="parrafos-container">
          <div className="parrafoq">
            <p>
            Lorem Ipsum es simplemente el texto de relleno 
            de las imprentas y archivos de texto. Lorem Ipsum ha 
             sido el texto de relleno estándar de las industrias 
             desde el año 1500, cuando un impresor (N. del T. person
             a que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro
               de textos especimen.
            </p>
          </div>
          <div className="parrafoq">
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas
             y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
              de las industrias desde el año 1500, cuando un impresor (N. del T.
               persona que se dedica a la imprenta) desconocido usó una galería de
                textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </p>
          </div>
        </div>
        <button className="contactar-button">Contactar</button>
      </div>
    </div>
  );
}

export default QuienesSomos;
