import React, { useEffect, useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import brand from './Assets/Brand.png'
import { navbar } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import {fetchUniversity , checklogin, decodeToken} from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const [universities , setuniversities]  = useState([]);
  const[userId , setUserId] = useState('');
  const[name , setName] = useState('');

  const navigate = useNavigate();
  const handleNavigate = (uni_id, uniName) => {
    navigate(`/university/${uni_id}/${uniName}`);
  };
   
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

  const logout = () => {
    localStorage.removeItem('token');
    // window.location.href('/')
  }

  useEffect(() => {
    const decode = decodeToken();
    if(decode){
     const user = decode.studentId;
     const userName = decode.name;
     setName(userName)
     setUserId(user);
    //  console.log('name' , name);
    }
    else{
     const user = null;
     const userName = null
     setName(userName)
     setUserId(user);
    }
  },[])

  return (
    <BootstrapNavbar  expand="lg" id='nav' > 
      <BootstrapNavbar.Brand href="/" className='brand'>    <FontAwesomeIcon icon={faGraduationCap} color="#ff5b25"  size='2x' /></BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor:'#ff5b25'}}/>
      <BootstrapNavbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto" >
          <NavDropdown title="Universities" id="basic-nav-dropdown" className='uniDropdown'>
            {universities.map((university) => (
              <NavDropdown.Item
                key={university.uni_id}
                onClick={() => handleNavigate(university.uni_id, university.uniName)}
                className='uniDropdownItem'
              >
              {university.uniName}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          {/* <h6 style={{color:"White",paddingLeft:"20px" }}>Hi <span>{name}</span></h6> */}
        </Nav>
        <Nav className='flexRight'>{userId
               ? <Nav.Link className='navbutt' href='/' onClick={logout}>
                  Logout
                 </Nav.Link>
               : <Nav.Link className='navbutt' href='/register'>
                  SignUp
                 </Nav.Link>}
                 <Nav.Link className='navicon' href={userId ? '/profile'  : '/login'}>
                    {
                      <FontAwesomeIcon icon={faUser} color='#7FC7D9' className='friendIcon' size='xl'/> 
                    }
                 </Nav.Link>
                 <Nav.Link className='navicon navFriend' href={userId ? '/friend' : '/login'}>
                    {
                      <FontAwesomeIcon icon={faUserGroup}  className='friendIcon' size='xl' /> 
                    }
                 </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;
