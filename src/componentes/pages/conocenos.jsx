import React from "react";
import im1 from "../home/media/Conocenos.jpg"; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faHandshake, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faGlobe, faHandshake, faHandPointUp);



function Conocenos() {
    return (
      <div className="conocenos-page">
        <div className="conocenos-content">
          <h2>¿POR QUÉ SAFEBOX?</h2>
          <div className="parrafos-imagen-container">
            <div className="parrafos-container">
              <div className="parrafo">
                <div className="icono">
                  <FontAwesomeIcon icon={faGlobe} style={{ color: "#cfc0bd",fontSize: "35px" }} />
                </div>
                <p>
                  Phasellus mattis diam non dui bibendum, 
                  nec lacinia quam facilisis. Cras nec feugiat
                  orci. Sed nec ligula at augue dignissim tincidunt.
                  Integer nec odio eget sem bibendum euismod.
                </p>
              </div>
              <div className="parrafo">
                <div className="icono">
                  <FontAwesomeIcon icon={faHandshake} style={{color: "#cfc0bd",fontSize: "35px"}} />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed vitae dolor auctor, dignissim quam ut, consequat ante.
                  Nullam cursus metus in libero lacinia, a vehicula nulla pharetra.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia Curae.
                </p>
              </div>
              <div className="parrafo">
                <div className="icono">
                  <FontAwesomeIcon icon={faHandPointUp} style={{color: "#cfc0bd" ,fontSize: "35px"}} />
                </div>
                <p>
                  Suspendisse efficitur, ligula eget ullamcorper
                  tincidunt, mi velit sollicitudin turpis,
                  at convallis risus justo nec ex.
                </p>
              </div>
            </div>
            <div className="imagen-container">
              <img src={im1} alt="Imagen relacionada con Safebox" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Conocenos;

