import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const adminNav = () => {
  return (
    <BootstrapNavbar  expand="lg" id='nav' > 
    <BootstrapNavbar.Brand href="/" className='brand'><img src={brand} alt="" /></BootstrapNavbar.Brand>
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor:'#ff5b25'}}/>
    <BootstrapNavbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto" >
       
        <h6 style={{color:"White",paddingLeft:"20px" }}>Hi <span>{name}</span></h6>
      </Nav>
      <Nav className='flexRight'>
             <Nav.Link className='navbutt' href='/' onClick={logout}>
                Logout
               </Nav.Link>
               <Nav.Link className='navicon' href= '/profile'>
                  {
                    <FontAwesomeIcon icon={faUser} color='#ff5b25' className='friendIcon' size='xl'/> 
                  }
               </Nav.Link>
      </Nav>
    </BootstrapNavbar.Collapse>
  </BootstrapNavbar>
);
}
export default adminNav