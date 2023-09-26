import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CustomNavbar.css';
import safebox from './media/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function CustomNavbar() {
    return (
      <Navbar expand="lg" className="custom-navbar-bg">
        <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
         <div className="logo-container">
           <img
             src={safebox}
             width="35"
             height="35"
            className="d-inline-block align-top logo"
            alt="Logo"
           />
          <span className="safebox-text">SAFEBOX</span>
         </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#conocenos" className="navbar-link">CONOCENOS</Nav.Link>
            <Nav.Link href="#contactanos" className="navbar-link">CONTACTANOS</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <Nav.Link href="#iniciar-sesion">
             <FontAwesomeIcon icon={faUser} className="avatar-icon" /> INICIAR SESION
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default CustomNavbar;
