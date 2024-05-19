import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EngCourseDetails = ({course}) => {
    // console.log("course  :" , course)
    const [edegId, setEdegId] = useState('');
  const [imageData, setImageData] = useState(null);
  const [imageName, setImageName] = useState('');
  const edeg_id =23;

   useEffect(() => {
    const fetchImage = async (edegId) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/EngDetails/image/23`, {
          responseType: 'blob' // Ensure we receive the data as a blob
        });
        const url = URL.createObjectURL(new Blob([response.data]));
        setImageData(url);
        // Assuming the filename can be inferred from headers
        const contentDisposition = response.headers['content-disposition'];
        const fileName = contentDisposition
          ? contentDisposition.split('filename=')[1].replace(/['"]/g, '')
          : 'downloaded_image';
        setImageName(fileName);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    if (edeg_id) {
      fetchImage(edeg_id);
    }
  }, []);

  return (
    <div className='engCourseDetails'>
          {imageData && (
        <div>
          <h3>{imageName}</h3>
          <img src={imageData} alt="Fetched from server" width="300" />
        </div>
      )}                                        
    </div>
  )
}

export default EngCourseDetails 