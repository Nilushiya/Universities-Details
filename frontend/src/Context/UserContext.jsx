import axios from 'axios'
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


const BASE_URL = 'http://localhost:8080/api/v1';

export const fetchUniversity = async() =>{
    try{
        const Universities = await axios.get(`${BASE_URL}/university/get`);
        // console.log("respones   : " , Universities.data);
        return Universities.data;
    }
    catch(err){
        console.error("Error in Fetch Universities" , err);
        throw err;
    }
}

export const fetchFaculty = async(id) => {
  try{
      const response = await axios.get(`${BASE_URL}/faculty/getfaculty/${id}`,id);
      return response
  }
  catch(err){
    console.log("Api error" , err)
  }
}

export const fetchAllDepartments = async() => {
  try{
    const response = await axios.get(`${BASE_URL}/department/get`)
    return response
  }
  catch(err){
    console.log("Error in Axios ",err);
  }
}

export const fetchDepartments = async(fac_id) => {
  try{
      const response = await axios.get(`${BASE_URL}/department/gruopedepartment/${fac_id}`,fac_id)
      return response
  }
  catch(err){
    console.log("Error in Axios ",err);
  }
}

export const fetchCourseDetails = async(dep_id) => {
  try{
      const response = await axios.get(`${BASE_URL}/EngDetails/getDetails/${dep_id}`,dep_id)
      return response
  }
  catch(err){
    console.log("Error in Axios ",err);
  }
}
export const getImage = async(depId) => {
  try{
    const response = await axios.get(`${BASE_URL}/EngDetails/image/${depId}`, {
      responseType: 'blob' 
    });

    return response;
  }
  catch(err){
      console.log("error" , err)
  }
}
export const studentInfo = async(stu_id , data ) => {
  try {
    console.log( "useContaxt")
    const response = await axios.post(`${BASE_URL}/studentInfo/${stu_id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log("res  : ", response)
  } catch (error) {
    alert(`${error.response.data} \n Your details already exists. don't need fill this form`)
    console.error('Error submitting form:', error.response.data);
  }
}
export const sendQuestions = async (question) => {
    try {
      const response = await axios.post(`${BASE_URL}/question/`, {
        question: question
      });console.log("Response: ", response.data);
      return response.data;
    } catch (error) {
      console.error("Error in sending question: ", error);
      throw error;
    }
  };
  export const checkRegister = async(formData) => {

    try {
      console.log("mdata   : ",formData)
      const response = await axios.post(`${BASE_URL}/register`, formData);
      console.log("response  :" , response)
      return response
    } 
    catch (error) {
      console.error("Email or Password not match", error);
    }
  }
  export const checklogin = async(formData) => {

    try {
      const response = await axios.post(`${BASE_URL}/login`, formData);
      // console.log("response  :" , response)
      return response
    } 
    catch (error) {
      console.error("Email or Password not match", error);
    }
  }

  export const decodeToken = () => {
    try{
      const token = localStorage.getItem('token');
      const decodeToken = jwtDecode(token);
      return decodeToken;
    }
    catch(err){
      return null;
    }
  
  }
  