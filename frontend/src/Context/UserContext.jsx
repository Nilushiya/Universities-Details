import axios from 'axios'
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


const BASE_URL = 'http://localhost:8080/api/v1';



// University
export const CreateUniversity = async(university) =>{
  try{
    const response = await axios.post(`${BASE_URL}/university/create`, { uniName: university.uniname });
    console.log("univer" , response)
    return response.data;
  }
  catch(err){
      console.error("Error in Create Universities" , err);
      throw err;
  }
}
export const fetchUniversity = async() =>{
    try{
        const Universities = await axios.get(`${BASE_URL}/university/get`);
        return Universities.data;
    }
    catch(err){
        console.error("Error in Fetch Universities" , err);
        throw err;
    }
}

export const updateUniversity = async (id, university) => {
  try {
    const response = await axios.put(`${BASE_URL}/university/updateuni/${id}`, null, {
      params: { uniName: university.uniname },
    });
    return response.data;
  } catch (err) {
    console.error("Error updating university", err);
    throw err;
  }
};

export const deleteUniversity = async (uni_id, university) => {
  try {
    const response = await axios.delete(`${BASE_URL}/university/delete/${uni_id}`);
    return response.data;
  } catch (err) {
    console.error("Error updating university", err);
    throw err;
  }
};


// StudentInfo
export const fetchByLanguage = async(selected_university , academic_year , language) => {
  
  try{
    const res = await axios.get(`${BASE_URL}/studentInfo/groupbylanguage/${academic_year}/${selected_university}/${language}`)
    return res
  }
  catch(err){
    console.log("Error in year by frined fetch language details ");
  }
} 

export const downloadPdf = async(studentinfo_id) => {
  try{
    const res = await axios.get(`${BASE_URL}/studentInfo/downloadpdf/${studentinfo_id}`,{responseType: 'blob',})
    return res
  }
  catch(err){
    console.log("Error in Download api :" , err);
  }
}

export const fetchByCourse = async(selected_university , academic_year , language , selected_course) => {
  try{
    const res = await axios.get(`${BASE_URL}/studentInfo/groupbyCourse/${academic_year}/${selected_university}/${language}/${selected_course}`)
    return res
  }
  catch(err){
    console.log("Error in year by frined fetch course details ");
  }
}

export const fetchbyYear = async(selected_university , academic_year) => {
  
  try{
    const res = await axios.get(`${BASE_URL}/studentInfo/groupbyuni/${academic_year}/${selected_university}`)
    return res
  }
  catch(err){
    console.log("Error in year by frined fetch  details ");
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
  } catch (error) {
    alert(`${error.response.data} \n Your details already exists. don't need fill this form`)
    console.error('Error submitting form:', error.response.data);
  }
}

export const fetchAllDetails = async(stu_id) => {
  try{
      const response = await axios.get(`${BASE_URL}/studentInfo/findCuromer/${stu_id}`)
      return response;
  }
  catch(err){
    console.log("Error in fetch All Details ", err);
  }
}

export const updateStuinfoProfile = async(stu_id , user) => {
  try{
    const response = await axios.put(`${BASE_URL}/studentInfo/stuInfoUpdate/${stu_id}`,user)
  }
  catch (error) {
    console.error("Error in update address , phone", error);
  }
}


// Faculty
export const fetchFaculty = async(id) => {
  try{
      const response = await axios.get(`${BASE_URL}/faculty/getfaculty/${id}`,id);
      return response
  }
  catch(err){
    console.log("Api error" , err)
  }
}



// Department
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



// Details
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



// Question
export const sendQuestions = async (question) => {
    try {
      const response = await axios.post(`${BASE_URL}/question/`, {
        question: question
      });
      return response.data;
    } catch (error) {
      console.error("Error in sending question: ", error);
      throw error;
    }
  };



// Register
export const checkRegister = async(formData) => {

  try {
    const response = await axios.post(`${BASE_URL}/register`, formData);
    return response
  } 
  catch (error) {
    console.error("Email or Password not match", error);
  }
}


// Student
export const fetchAdminDetails = async(studentId) => {
  try{
      const response = await axios.get(`${BASE_URL}/student/admin/${studentId}`)
      return response;
  }
  catch(err){
    console.log("Error in fetch All Details ", err);
  }
}

export const updateStuProfile = async(stu_id , user1) => {
  try{
    const response = await axios.put(`${BASE_URL}/student/stuUpdate/${stu_id}`,user1)
  }
  catch (error) {
    console.error("Error in update email , name", error);
  }
}

export const deleteAcc = async(stu_id) => {
  try{
    const response = await axios.put(`${BASE_URL}/student/deactivateUser/${stu_id}`)
  }
  catch(err){
    console.log("Error in delete Account ",err)
  }
}


  // Login
export const checklogin = async(formData) => {

  try {
    const response = await axios.post(`${BASE_URL}/login`, formData);
    return response
  } 
  catch (error) {
    console.error("Email or Password not match", error);
  }
}


  // Token
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
  