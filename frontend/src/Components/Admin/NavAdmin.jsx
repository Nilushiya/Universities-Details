import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import brand from '../Assets/Brand.png'
const NavAdmin = () => {
    const logout = () => {
        localStorage.removeItem('token');
        // window.location.href('/')
      }
  return (
    <div className="NavAdmin">
        <BootstrapNavbar expand="lg" id="navbar">
            <BootstrapNavbar.Brand href="#" className="brandIcon">
            <FontAwesomeIcon icon={faGraduationCap} color="#ff5b25"  size='2x' />
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#ff5b25' }} />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto adminRight">
                    <Nav.Link className="logoutBtn" href="#" onClick={logout}>
                        Logout
                    </Nav.Link>
                    <Nav.Link className="navicon" href="/adminprofile">
                        <FontAwesomeIcon icon={faUser} color="#ff5b25" className="friendIcon" size='xl' />
                    </Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
     </div>
);
}
export default NavAdmin