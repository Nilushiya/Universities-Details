import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { fetchFaculty } from '../Context/UserContext';


const University = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() =>{
    const fetchFacultyApi = async() => {
      try{
        const response = await fetchFaculty(id);
        console.log("response" ,response)
      }
      catch(err){
        console.log("Error in Fetch Faculty " , err);
      }
    }
  },[])

  useEffect(() => {
    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split('/');
    const universityId = pathSegments[2]; 
    const universityName = pathSegments[3];
    setId(universityId);
    setName(decodeURIComponent(universityName)); 
  }, []);
console.log(id);
  return (
    <div className='university'>
      <div className="row">
        <div className="col-lg-3 leftSideBar">
            <Navbar  expand="lg" style={{backgroundColor:"#072040"}}>
          <Container style={{backgroundColor:"#072040"}}>
            <Navbar.Toggle aria-controls="navbar-nav" style={{backgroundColor:"#072040" }}/>
            <Navbar.Collapse id="navbar-nav" style={{backgroundColor:"#072040", borderRadius:"20px", borderRadius:"20px"}}>
        <Nav className="me-auto navList" style={{display:"flex" , flexDirection:"column",backgroundColor:"#072040"}}>
          <div className="dropdown-column" style={{backgroundColor:"#ff5b25",marginBottom:"10px", borderRadius:"10px",padding:"10px"}}>
            <NavDropdown title="Services 1" id="services-dropdown-1">
              <NavDropdown.Item href="#" style={{backgroundColor:"#ff5b25",":hover": { backgroundColor: "blue" }}}>Service Name 1</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar.Collapse>
          </Container>
            </Navbar>
        </div>
        <div className="col-lg-8 rightBody">
            <h1>Welcome to </h1>
            <h1>{name}</h1>
        </div>
      </div>
    </div>
   
  )
}

export default University