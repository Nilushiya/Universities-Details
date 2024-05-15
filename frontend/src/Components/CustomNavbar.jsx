import React, { useEffect, useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import brand from './Assets/Brand.png'
import { navbar } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import {fetchUniversity , checklogin, decodeToken} from '../Context/UserContext'

const CustomNavbar = () => {
  const [universities , setuniversities]  = useState([]);
  // console.log("uni  : " , universities);
  // console.log("uniname  : " , universities[0].uniName);
  useEffect(() => {
    const fetchUniApi = async() =>{
      try{
        const universitiesData = await fetchUniversity();
        setuniversities(universitiesData);
      }
      catch(err){
        console.log("Error in fetchUniApi");
      }
    }
    fetchUniApi();
  } , [])


   const decode = decodeToken();
   const userId = decode.studentId;
  return (
    <BootstrapNavbar  expand="lg" id='nav' > 
      <BootstrapNavbar.Brand href="/" className='brand'><img src={brand} alt="" /></BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor:'#ff5b25'}}/>
      <BootstrapNavbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto" >
          <NavDropdown title="Universities" id="basic-nav-dropdown" className='uniDropdown'>
          {universities.map((university) => (
    <NavDropdown.Item key={university.uni_id} href={`university/${university.uni_id}/${university.uniName}`} className='uniDropdownItem'>{university.uniName}</NavDropdown.Item>
))}

          </NavDropdown>
        </Nav>
        <Nav className='flexRight'>{userId ? 
              <Nav.Link className='navbutt' href='/login'>
                Logout
              {/* <button  className='navBtn'>Login</button> */}
            </Nav.Link>
            : <Nav.Link className='navbutt' href='/register'>
              SignUp
            {/* <button  className='navBtn'>SignUp</button> */}
          </Nav.Link>
            }
          <Nav.Link className='navicon' href={userId ? '/profile'  : '/login'}>
            {
              <FontAwesomeIcon icon={faUser} color='#ff5b25' className='friendIcon' size='xl'/> 
            }
          </Nav.Link>
          <Nav.Link className='navicon navFriend' href={userId ? '/friend' : '/login'}>
            {
              <FontAwesomeIcon icon={faUserGroup}  className='friendIcon' size='xl'/> 
            }
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;
