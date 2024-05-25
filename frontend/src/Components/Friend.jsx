import React, { useEffect, useState } from 'react'
import {friend} from './Style'
import CustomNavbar from './CustomNavbar'
import { decodeToken, fetchAllDetails } from '../Context/UserContext'
const Friend = () => {
    const [year , setYear] = useState([])
    const [user, setUser1] = useState({
        phone: '',
        address: ''
      });
      const [user1, setUser2] = useState({
        username: '',
        email: '',
      });
      const[stu_id , setStu_id] = useState('');
      const[customerName , setName] = useState('');
    
      useEffect(() => {
        const fetchDetails = async (stu_id) => { 
          try {
            const response = await fetchAllDetails(stu_id);  
            setUser1(response.data[0][0]);
            setUser2(response.data[0][1]);
          } catch (error) {
            console.error('There was an error fetching the user details!', error);
          }
        };
        if (stu_id) {  
          fetchDetails(stu_id);
        }
      }, [stu_id]);

      useEffect(() => {
        const decode = decodeToken();
         const user = decode.studentId;
         const userName = decode.name;
         setName(userName)
         setStu_id(user);
      },[])
    // if (year.length === 0) {
    //     return <p>No data available</p>;
    //   }
  return (
    <div className='friend'>
        <CustomNavbar />
        <div className="buttonGroup">
            <button>Year</button>
            <button>Language</button>
            <button>Course</button>
        </div>
        <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Friend Name</th>
            <th>Email </th>
            <th>Address </th>
            <th>PDF File</th>
          </tr>
        </thead>
        <tbody>
          {year.map((item, index) => (
            <tr key={index}>
              <td>{item.friendName}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>
                <a href={item.pdfUrl} className="download-button" download>
                  Download PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Friend