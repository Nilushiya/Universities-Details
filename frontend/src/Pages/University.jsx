import React, { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { fetchCourseDetails, fetchDepartments, fetchFaculty } from '../Context/UserContext';
import { useParams } from 'react-router-dom';
import Details from '../Components/Details';
import CustomNavbar from '../Components/CustomNavbar';
import { university } from '../Components/Style';
import EngCourseDetails from '../Components/EngCourseDetails';

const University = () => {

  const [faculties , setFaculty] = useState([])
  const [ departments , setDepartment] = useState([])
  const [depName , setDepName] = useState('')
  const[course , setCourse] = useState([])
  const[display , setDisplay] = useState(false)

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
  },[id])

  
  const fetchCourse = async(dep_id,departmentName) =>{
    setDisplay(true)
    try{
      setDepName(departmentName)
      const CourseRespone = await fetchCourseDetails(dep_id)
      console.log("course  : ",CourseRespone )
      setCourse(CourseRespone.data)
    }
    catch(err){
      console.log("Error in call Api" , err);
    }
  }

  const fetchDepartment = async(fac_id) =>{
    // setDisplay(false)
    try{
      const depRespone = await fetchDepartments(fac_id)
      setDepartment(depRespone.data)
    }
    catch(err){
      console.log("Error in call Api" , err);
    }
  }
  // console.log("depName : ",depName)
  // console.log("boolean  : ",display)
// console.log("dep" ,departments )
  return (
    <div className='university'>
      <CustomNavbar />
      <div className="row m-0 w-100">
        <div className="col-lg-3 leftSideBar">
          <Navbar  expand="lg" style={{backgroundColor:"#0F1035"}}>
            <Container style={{backgroundColor:"#0F1035"}}>
              <Navbar.Toggle aria-controls="navbar-nav" style={{backgroundColor:"#0F1035" ,color:"white",border:"2px solid white" }}/>
                <Navbar.Collapse id="navbar-nav" style={{backgroundColor:"#0F1035", borderRadius:"20px"}}>
                  <Nav className="me-auto navList" style={{display:"flex" , flexDirection:"column",backgroundColor:"#0F1035"}}>
                    <div className="dropdown-column" style={{backgroundColor:"#7FC7D9", borderRadius:"10px" ,width:"300px"}}>
                      {faculties.map((faculty, index) => (
                        <NavDropdown title={faculty.facultyName} id={`services-dropdown-${index}`} key={faculty.fac_id} onClick={() =>fetchDepartment(faculty.fac_id)} style={{padding:"10px",border:"1px solid #072040"}}>
                          {departments.map((department) => (
                            <NavDropdown.Item   key={department.dep_id} style={{color:"#0F1035",backgroundColor: "#7FC7D9",border:"1px solid #072040",paddingTop:"10px" }} onClick = {() =>fetchCourse(department.dep_id , department.departmentName) } >
                              {department.departmentName}
                            </NavDropdown.Item>))}
                        </NavDropdown>))
                      }
                    </div>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
          <div className="col-lg-9 rightBody">
            {depName  ? 
            <EngCourseDetails 
              course = {course} 
              departmentName = {depName}    />   :  
            <Details 
              name = {name}
              faculties = {faculties}/>}
          </div>
      </div>
    </div>
   
  )
}

export default University