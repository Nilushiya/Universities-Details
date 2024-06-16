import axios from 'axios'
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react';

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
    console.error("Error Deleting university", err);
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
  console.log("iii: ",academic_year,selected_university)
  
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

export const checkinfo = async(stu_id) => {
  try{
      const response = await axios.get(`${BASE_URL}/studentInfo/checkinfo/${stu_id}`)
      // console.log("res",response)
      return response;
  }
  catch(err){
    console.log("Error in fetch user  Details ", err);
  }
}
export const fetchAllDetails = async(stu_id) => {
  try{
      const response = await axios.get(`${BASE_URL}/studentInfo/findCuromer/${stu_id}`)
  // console.log(response.data)

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
export const CreateFaculty = async(facData) =>{
  try{
    console.log("facdff" , facData)
    const response = await axios.post(`${BASE_URL}/faculty/`,  facData );
    // console.log("res" , response)
    return response.data;
  }
  catch(err){
      console.error("Error in Create Faculties" , err);
      throw err;
  }
}
export const fetchAllFaculty = async() => {
  try{
      const response = await axios.get(`${BASE_URL}/faculty/get`);
      return response
  }
  catch(err){
    console.log("Api error get All fac" , err)
  }
}
export const fetchWithUni = async() => {
  try{
      const response = await axios.get(`${BASE_URL}/faculty/getwithUni`);
      return response
  }
  catch(err){
    console.log("Api error get All fac" , err)
  }
}
export const fetchFaculty = async(fac_id) => {
  try{
      const response = await axios.get(`${BASE_URL}/faculty/getfaculty/${fac_id}`,fac_id);
      return response
  }
  catch(err){
    console.log("Api error" , err)
  }
}
export const updateFaculty = async (fac_id, faculty) => {
  try {
    // console.log("iii:",fac_id)
    // console.log("faculty:",faculty)
    const response = await axios.put(`${BASE_URL}/faculty/updatefaculty/${fac_id}`,
      faculty
    );
    return response.data;
  } catch (err) {
    console.error("Error updating Faculty", err);
    throw err;
  }
};
export const deleteFaculty = async (fac_id, faculty) => {
  try {
    const response = await axios.delete(`${BASE_URL}/faculty/delete/${fac_id}`);
    return response.data;
  } catch (err) {
    console.error("Error Deleting university", err);
    throw err;
  }
};



// Department
export const CreateDeparment = async(facData) =>{
  try{
    // console.log("facdff" , facData)
    const response = await axios.post(`${BASE_URL}/department/post`,facData );
    // console.log("res" , response)
    return response.data;
  }
  catch(err){
      console.error("Error in Create Department" , err);
      throw err;
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
export const fetchByJoin = async() => {
  try{
    const response = await axios.get(`${BASE_URL}/department/getAll`)
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
export const updateDepartment = async (dep_id, department) => {
  try {
    console.log("iii:",dep_id)
    console.log("department:",department)
    const response = await axios.put(`${BASE_URL}/department/updateDepartment/${dep_id}`,
    department
    );
    console.log("res",response)
    return response.data;
  } catch (err) {
    console.error("Error updating department", err);
    throw err;
  }
};
export const deleteDepartment = async (dep_id) => {
  console.log("deId :",dep_id)
  try {
    const response = await axios.delete(`${BASE_URL}/department/delete/${dep_id}`);
    return response.data;
  } catch (err) {
    console.error("Error Deleting Department", err);
    throw err;
  }
};



// Details
export const addCourseDetails = async(facData ) =>{
  try{
    console.log("facdff" , facData)
    const response = await axios.post(`${BASE_URL}/EngDetails/`,facData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },} );
    console.log("res" , response)
    return response.data;
  }
  catch(err){
      console.error("Error in Create details" , err);
      throw err;
  }
}
export const fetchCourseDetails = async(edeg_id) => {
  try{
      const response = await axios.get(`${BASE_URL}/EngDetails/getDetails/${edeg_id}`,edeg_id)
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
export const updateCourseDetails = async ( details) => {
  try {
    
    let edetails_id = null;
    for (let [key, value] of details.entries()) {
      if (key === 'edetails_id') {
        edetails_id = value;
      }
    }
    console.log("iii:",edetails_id)
    const response = await axios.put(`${BASE_URL}/EngDetails/update/${edetails_id}`,
    details, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },} 
    );
    console.log("res",response)
    return response.data;
  } catch (err) {
    console.error("Error updating details", err);
    throw err;
  }
};


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
  export const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/question/`);
      return response.data;
    } catch (error) {
      console.error("Error in sending question: ", error);
      throw error;
    }
  };
  export const deleteQuestions = async (question_id) => {
    try {
      console.log("qid ; ",question_id)
      const response = await axios.delete(`${BASE_URL}/question/delete/${question_id}`);
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
export const fetchAllUser = async() => {
  try{
      const response = await axios.get(`${BASE_URL}/student/getAllUser`)
      return response;
  }
  catch(err){
    console.log("Error in fetch All Users ", err);
  }
}
export const changeUserType = async(email) => {
  try{
    console.log("Email",email)
    const response = await axios.post(`${BASE_URL}/student/changeType`,  { email })
    console.log("reees:",response)
    return response;
}   
catch(err){
  console.log("Error in change userType ", err);
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
  console.log("ID Delete:",stu_id)
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



//   const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [userRole, setUserRole] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       setUserRole(decodedToken.userType);
//     }
//     // setLoading(false);
//   }, []);
// console.log('poiuytrewqAXCVHJK :', children)
  // return (
  //   <UserContext.Provider value={{ userRole }}>
  //     {children}
  //   </UserContext.Provider>
  // );
// };

// export const useUserContext = () => useContext(UserContext);