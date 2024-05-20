import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getImage } from '../Context/UserContext';

const EngCourseDetails = ({course,departmentName}) => {
  // console.log("depname" , departmentName)
  const [edegId, setEdegId] = useState('');
  const [imageData, setImageData] = useState(null);
  const [imageName, setImageName] = useState('');
  const [depId,setDepId] = useState('')
  const [probs, setProbs] = useState([])

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
          // console.log("file : ",fileName)
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
      <div className="row">
        <div className="col-lg-6">
          {imageData && (
            <div>
              <img src={imageData} alt="Fetched from server" width="300" />
            </div>
          )}  
        </div>
        <div className="col-lg-6">
         {departmentName &&(
             <div>{departmentName}</div>
              
           
         )}
        </div>
      </div>
      <div className="row">
          <div className="col-12">

          </div>
      </div>                                        
    </div>
  )
}

export default EngCourseDetails 