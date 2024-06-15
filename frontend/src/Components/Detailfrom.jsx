import React, { useEffect, useState } from 'react'
import { fetchUniversity, studentInfo } from '../Context/UserContext';
import axios from 'axios';
import { Details } from './Style';
import { useParams } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
const Detailfrom = () => {
    const [universities , setuniversities]  = useState([]);
    const [formData, setFormData] = useState({
        address: '',
        selected_university: '',
        gender: '',
        language: '',
        phone: '',
        image: null,
        academic_year: '',
        selected_course: ''
      });

      const URLParam =useParams()
      const stu_id = URLParam.userId
      const stu_name = URLParam.stuname
      useEffect(() => {
        const fetchUniApi = async() =>{
          try{
            const universitiesData = await fetchUniversity();
            setuniversities(universitiesData);
          }
          catch(err){
            console.log("Error in fetchUniApi");
          }
        }
        fetchUniApi();
      } , [])
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
         try{
          const studentData = await studentInfo(stu_id , data);
          alert("Successfully Submitted")
          setFormData({
            address: '',
            selected_university: '',
            gender: '',
            language: '',
            phone: '',
            image: null,
            academic_year: '',
            selected_course: ''
          });
         }
         catch(err){
          console.log("Error ; ", err)
         } 
      }

      return (
        <div className="detailfrorm">
                 
           <div className="user-form-container">
           {/* <CustomNavbar /> */}
            <div className="info">
            <h1 >{stu_name} Infrormation</h1>
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
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            /> 
             <select
            name="selected_university"
            value={formData.selected_university}
            onChange={handleChange}
            required
          >
            <option value="">Select University</option>
            {universities.map((university) => (
              <option key={university.uni_id} value={university.uniName}>
                {university.uniName}
              </option>
            ))}
          </select>
              <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Non-binary person">Non-binary person</option>
          </select>
             <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          >
            <option value="">Select Language</option>
            <option value="Tamil">Tamil</option>
            <option value="Sinhala">Sinhala</option>
            <option value="English">English</option>
          </select>
            
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
              placeholder="Academic Year (2020/2021)"
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
        </div>

       
      );
    };
    

export default Detailfrom