import React, { useEffect, useState } from 'react'
import { decodeToken, fetchAllDepartments, fetchDepartments } from '../Context/UserContext'
import { university } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile} from '@fortawesome/free-solid-svg-icons'; 

 const Details = ({name, faculties}) => {
    const[userId , setUserId] = useState('');
    const[custemer , setName] = useState('');
    const[facultie , setFaculties] = useState([])
    const[departments , setDepartment] =useState([])


    useEffect(() => {
        const decode = decodeToken();
        if(decode){
         const user = decode.studentId;
         const userName = decode.name;
         setName(userName)
         setUserId(user);
        }
        else{
         const user = null;
         const userName = "there"
         setName(userName)
         setUserId(user);
        }
      },[])

      useEffect(() => {
        setFaculties(faculties);
        const fetchDepart = async() => {
          try{
            const depRespone = await fetchAllDepartments()
            setDepartment(depRespone.data)
          }
          catch(err){
            console.log("Error in call Api" , err);
          }
        }
        fetchDepart()
      },[faculties])

  return (
    <div className='details'>
      <div className="uniName">
        <h1>Hello              
        <FontAwesomeIcon icon={faFaceSmile}  className='smile' size='1x' style={{color:"#365486"}}/> 
        <i>{custemer},</i> 
        <br />
        Welcome to {name}</h1>
      </div>          
      {faculties && faculties.length > 0 ? ( 
      <div className="fac">
        <h3>Here you can see our Faculties and there Departments</h3>
          {faculties.map((fac, index) => (
            <div className='facname' key={index}>
              {index + 1} = {fac.facultyName}
               {departments.length > 0 
                ? (departments.map((department, i) => (
                  fac.fac_id === department.f_id ? (
                    <div className="dep" key={i} style={{paddingLeft:"5%"}}>
                      {department.departmentName}
                    </div>) : null))) : (<p>no depart ment</p>)}
            </div>
          ))}
      </div>) 
      : <p style={{marginTop:"20%",marginLeft:"35%"}}>Still not Add data Sorry.....</p>}
    </div>
  )
}

export default Details