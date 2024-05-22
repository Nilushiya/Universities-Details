import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { decodeToken, getImage } from '../Context/UserContext';
import { courseDetails } from './Style/index';
import { Link } from 'react-router-dom';
const EngCourseDetails = ({course,departmentName}) => {
  console.log("course" , course)
  const [edegId, setEdegId] = useState('');
  const [imageData, setImageData] = useState(null);
  const [imageName, setImageName] = useState('');
  const [depId,setDepId] = useState('')
  const [probs, setProbs] = useState([])
  const[userId , setUserId] = useState('');
  const[stuname , setName] = useState('');

  useEffect(() => {
    const decode = decodeToken();
    if(decode){
     const user = decode.studentId;
     const userName = decode.name;
     setName(userName)
     setUserId(user);
     console.log('name' , stuname);
    }
    else{
     const user = null;
     const userName = null
     setName(userName)
     setUserId(user);
    }
  },[])
  useEffect(() => {
    if (course) {
      setProbs(course)
    }
    else{
      setProbs('')
    }
  },[course])

    useEffect(() => {
      if(probs.length > 0){
        setDepId(probs[0].edeg_id)
      }
      else{
        setDepId('')
      }
    }, [probs])

   useEffect(() => {
   
    const fetchImage = async (depId) => {
      try {
        const response = await getImage(depId)
        
        const url = URL.createObjectURL(new Blob([response.data]));
        setImageData(url);
        const contentDisposition = response.headers['content-disposition'];
        const fileName = contentDisposition
          ? contentDisposition.split('filename=')[1].replace(/['"]/g, '')
          : 'downloaded_image';
        setImageName(fileName);
      } 
      catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage(depId);
  }, [depId]);

  return (
    <div className='engCourseDetails'>
      {course.length > 0 && (
        <div className="container coursebody">
          <div className="row">
            <h1 className='degreeName'>{departmentName &&(
                <div>{departmentName}</div>  
                )}
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              {imageData && (
                <div className='courseImg'>
                  <img src={imageData} alt="Fetched from server" width="300" />
                </div>
              )}  
            </div>
            <div className="col-lg-6 rightbody">
                <p>Degree Program : {course[0].degree}</p>
                <p>Course duration : {course[0].edegree_duration} year</p>
            </div>
          </div>
          <div className="row">
              <div className="col-12 coursebottom">
                <h4>Do you want small information about this course </h4>
                <p>Here read this...</p>
                <p>{course[0].edegree_description1}</p>
                <h4>Your available Jobs....</h4>
                <p>{course[0].edegree_jobs}</p>
              </div>
              <div className="col-12">
                <h4>Do you want to find a friend? {userId ?<Link to={`/detailform/${userId}/${stuname}`} >Click here</Link> :
                <Link to={`/detailform/${userId}/${stuname}`}>Click here</Link>
                //  <Link to="/login">Click here</Link>
                  } and fill in your details.</h4>
              </div>
          </div>      
        </div>
      )}                                    
    </div>
  )
}

export default EngCourseDetails 