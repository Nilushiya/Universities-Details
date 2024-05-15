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

  export const checklogin = async(formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, formData);
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
  