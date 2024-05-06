import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand href="#home">Navbar</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;
