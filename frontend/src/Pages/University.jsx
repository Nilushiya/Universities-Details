import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { fetchDepartments, fetchFaculty } from '../Context/UserContext';
import { useParams } from 'react-router-dom';
import Details from '../Components/Details';
import CustomNavbar from '../Components/CustomNavbar';
import { university } from '../Components/Style';

const University = () => {

  const [faculties , setFaculty] = useState([])
  const [ departments , setDepartment] = useState([])

  const URLParams = useParams() 
  const id = URLParams.uni_id
  const name = URLParams.uniName

  useEffect(() =>{
    const fetchFacultyApi = async(id) => {
      try{
        const responses = await fetchFaculty(id);
        setFaculty(responses.data)
      }
      catch(err){
        console.log("Error in Fetch Faculty " , err);
      }
    }
    fetchFacultyApi(id)
  },[])

  const fetchDepartment = async(fac_id) =>{
    try{
      const depRespone = await fetchDepartments(fac_id)
      setDepartment(depRespone.data)
    }
    catch(err){
      console.log("Error in call Api" , err);
    }
  }

  return (
    <div className='university'>
      <CustomNavbar />
      <div className="row m-0">
        <div className="col-lg-3 leftSideBar">
            <Navbar  expand="lg" style={{backgroundColor:"#072040"}}>
          <Container style={{backgroundColor:"#072040"}}>
            <Navbar.Toggle aria-controls="navbar-nav" style={{backgroundColor:"#072040" }}/>
            <Navbar.Collapse id="navbar-nav" style={{backgroundColor:"#072040", borderRadius:"20px"}}>
        <Nav className="me-auto navList" style={{display:"flex" , flexDirection:"column",backgroundColor:"#072040"}}>
          <div className="dropdown-column" style={{backgroundColor:"#ff5b25", borderRadius:"10px" ,width:"300px"}}>

          {faculties.map((faculty, index) => (
        <NavDropdown title={faculty.facultyName} id={`services-dropdown-${index}`} key={faculty.fac_id} onClick={() =>fetchDepartment(faculty.fac_id)} style={{padding:"10px",border:"1px solid #072040"}}>
          {departments.map((department) => (
          <NavDropdown.Item   key={department.dep_id} style={{color:"#072040",backgroundColor: "#ff5b25",border:"1px solid #072040",paddingTop:"10px" }} >
            {department.departmentName}
          </NavDropdown.Item>))}
        </NavDropdown>
      ))}
          </div>
        </Nav>
      </Navbar.Collapse>
          </Container>
            </Navbar>
        </div>
        <div className="col-lg-8 rightBody">
          {/* {faculties.map((faculty) => ( */}
            <Details 
            name = {name}
            faculties = {faculties}
            />
          {/* ))} */}
        </div>
      </div>
    </div>
   
  )
}

export default University