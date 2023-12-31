import logo from "../../multimedia/images/estaticos/general/safebox.png";
import usplaceholder from "../../multimedia/images/estaticos/general/userplaceholder.png";
import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faNewspaper,
  faBook,
  faSearch,
  faX,
  faHouseChimneyWindow,
  faUser,
  faBell,
  faCalendar,
  faHouseChimneyUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Navbarra(props) {
  const islogged = props.data;
  return (
    <Navbar
      expand="lg"
      className="nava fixed-top bggreen mx-0 py-1"
      data-bs-theme="dark"
    >
      <Navbar.Brand as={Link} to={"/"}>
        <div className="d-flex align-items-center navaitem">
          <img alt="" src={logo} className="d-inline-block align-top ms-4" />
          <h1 className="d-inline mx-2 mt-3 titulo">SAFEBOX</h1>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarNav" />

      <Navbar.Collapse id="navbarNav" className="bggreen">
        <Row className="w-100 justify-content-center align-items-center">
          <Col lg={4}>
            <Nav className="justify-content-start w-100 whitetxt">
              <Nav.Link as={Link} to="quienes" className="">
                <h2 className="d-inline mx-2 mt-auto normaltxt whitetxt">
                  Conocenos
                </h2>
              </Nav.Link>
              <Nav.Link as={Link} to="ContactDatos" className="">
                <h2 className="d-inline mx-2 mt-auto normaltxt whitetxt">
                  Contactanos
                </h2>
              </Nav.Link>
            </Nav>
          </Col>

          <Col lg={8} className="justify-content-between align-items-center">
            <Nav className="justify-content-end w-100 align-items-center">
              {islogged ? (
                <>
                  <Nav.Link as={Link} to="notif" className="d-inline">
                    <h2 className="d-inline mx-2 mt-auto normaltxt whitetxt">
                      <FontAwesomeIcon icon={faBell} />{" "}
                      <b className="d-none d-xl-inline-block">Notificaciones</b>
                    </h2>
                  </Nav.Link>
                  <Nav.Link as={Link} to="properties" className="d-inline">
                    <h2 className="d-inline mx-2 mt-auto normaltxt whitetxt">
                      <FontAwesomeIcon icon={faHouseChimneyWindow} />
                      <b className="d-none d-xl-inline-block">
                        {" "}
                        Mis Propiedades
                      </b>
                    </h2>
                  </Nav.Link>
                  <Nav.Link as={Link} to="properties" className="d-inline">
                    <h2 className="d-inline mx-2 mt-auto normaltxt whitetxt">
                      <img
                        src={usplaceholder}
                        alt=""
                        className=""
                        height="50px"
                      />
                    </h2>
                  </Nav.Link>
                </>
              ) : (
                <div>
                  <Nav.Link as={Link} to="login" className="">
                    <h2 className="d-inline mx-2 mt-auto normaltxt whitetxt">
                      <FontAwesomeIcon icon={faUser} /> Iniciar Sesión
                    </h2>
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Col>
        </Row>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarra;
