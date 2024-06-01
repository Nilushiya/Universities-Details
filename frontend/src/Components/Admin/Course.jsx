import React, { useEffect, useState } from 'react'
import {course} from '../Style'
import { useParams } from 'react-router-dom'
import NavAdmin from './NavAdmin'
import Sidebar from './Sidebar'
import { addCourseDetails, fetchCourseDetails, updateCourseDetails } from '../../Context/UserContext'
const Course = () => {
   
    const [isUpdating, setIsUpdating] = useState(false);
    const useparam = useParams()
    const departmentId = useparam.dep_id
    const departmentName = useparam.departmentName
    const [details, setDetails] = useState({
      degree: '',
      edegree_description1: '',
      edetails_id : '' ,
      edegree_duration: '',
      edegree_jobs: '',
      image_data: null ,
      edeg_id :''
    });
    useEffect(() => {
      if (departmentId) {
        setDetails(details => ({ ...details, edeg_id: departmentId }));
      }
    }, [departmentId]);
    useEffect(() => {
        const getdetail = async(departmentId) => {
            try{
                const response =await fetchCourseDetails(departmentId)
                console.log("response : ",response.data)
                if (response.data && response.data.length > 0) {
                    setDetails(response.data[0]);
                    setIsUpdating(true);
                  }
            }
            catch(err){
                console.log("Error in getDetails ",err)
            }
        }
       getdetail(departmentId)
    },[departmentId])

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
          setDetails((details) => ({
            ...details,
            [name]: value,
          }));
    }
 const handleSubmit = async (e) => {
    e.preventDefault();  
    console.log("details" , details)
    const formData = new FormData();
    for (const key in details) {
      formData.append(key, details[key]);
    }
    try {
      if (isUpdating) {     
        await updateCourseDetails( formData);
        alert('Course details updated successfully');
      } else {
        await addCourseDetails(formData);
        alert('Course details added successfully');
      }
    } catch (err) {
      console.log('Error in handleSubmit', err);
    }
  };
    
  return (
    <div className='course'>
        <div className="adminProfileContainer">
        <NavAdmin />
          <div className="row m-0 adminRow" style={{backgroundColor:"#DCF2F1"}}>
            <div className="col-lg-4 col-md-2 col-2  sidebarr" >
              <Sidebar />        
            </div>
            <div className="col-lg-8 col-md-10 col-10  AdminPro" >
              <div className="profileAdmincontainer">
                <div className="coursedetails">
                  <h1>{departmentName}</h1>
                  <form onSubmit={handleSubmit} className="form">
                    <div className="tag">
                      <label htmlFor="degree">Degree</label>
                      <input 
                          name="degree"
                        type="text" 
                        value={details.degree} 
                        onChange={handleChange}                      placeholder="Degree" 
                        required 
                      />
                    </div>
                    <div className="tag">
                      <label htmlFor="edegree_description1">Degree description</label>
                      <input 
                          name="edegree_description1"
                        type="text" 
                        value={details.edegree_description1} 
                        onChange={handleChange}                      placeholder="Degree description" 
                        required 
                      />
                    </div>
                  <div className="tag">
                    <label htmlFor="edegree_duration">Degree duration</label>
                    <input 
                        name="edegree_duration"
                      type="number" 
                      value={details.edegree_duration} 
                      onChange={handleChange}                      placeholder="Degree duration" 
                      required 
                    />
                  </div>
                    <div className="tag">
                      <label htmlFor="edegree_jobs">Jobs</label>
                      <input 
                        name="edegree_jobs"
                        type="text" 
                        value={details.edegree_jobs} 
                        onChange={handleChange}                
                        placeholder="Jobs" 
                        required 
                      />
                    </div>
                    <button type="submit">{isUpdating ? 'Update' : 'Add'}</button>
                  </form>
                </div>
              </div>
            </div>         
          </div>
      </div>
     </div>
  )
}

export default Course