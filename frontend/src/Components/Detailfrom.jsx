import React, { useEffect, useState } from 'react'
import { decodeToken } from '../Context/UserContext';
import axios from 'axios';
import { Details } from './Style';
const Detailfrom = () => {
    const[userId , setUserId] = useState('');
    const[name , setName] = useState('');
    const [formData, setFormData] = useState({
        address: '',
        selected_university: '',
        gender: '',
        language: '',
        phone: '',
        image: null,
        academic_year: '',
        selected_course: '',
        stu_id:''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleFileChange = (e) => {
        setFormData({
          ...formData,
          image: e.target.files[0]
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
          data.append(key, formData[key]);
        }
    
        try {
          const response = await axios.post('http://localhost:8080/api/v1/user', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

    useEffect(() => {
        const decode = decodeToken();
        if(decode){
         const user = decode.studentId;
         const userName = decode.name;
         setName(userName)
         setUserId(user);
         console.log('name' , name);
        }
        else{
         const user = null;
         const userName = null
         setName(userName)
         setUserId(user);
        }
      },[])
      console.log("stu_id" , userId)
      return (
        <div className="user-form-container">
            <div className="info">
            <h1 >User Infrormation</h1>
          <form className="user-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="selected_university"
              placeholder="Selected University"
              value={formData.selected_university}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={formData.language}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              required
              style={{color:"white"}}
            />
            <input
              type="text"
              name="academic_year"
              placeholder="Academic Year"
              value={formData.academic_year}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="selected_course"
              placeholder="Selected Course"
              value={formData.selected_course}
              onChange={handleChange}
              required
            />
            <button type="submit" className='submitBut'>Submit</button>
          </form>
            </div>
        </div>
      );
    };
    

export default Detailfrom