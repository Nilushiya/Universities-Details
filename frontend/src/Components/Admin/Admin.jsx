import React, { useEffect, useState } from 'react'
import {admin , profile} from '../Style'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { profile } from './Style'
import { decodeToken, deleteAcc, fetchAdminDetails, fetchAllDetails, updateStuProfile, updateStuinfoProfile } from '../../Context/UserContext';
const Admin = () => {
    // const [user, setUser1] = useState({
    //     phone: '',
    //     address: ''
    //   });
      const [user, setUser] = useState({
        username: '',
        email: '',
      });
      const[stu_id , setStu_id] = useState('');
      const[customerName , setName] = useState('');
      const [isEditing, setIsEditing] = useState(false);
    
      useEffect(() => {
        const fetchAdmin = async (stu_id) => { 
          try {
            const response = await fetchAdminDetails(stu_id);  
            setUser(response.data[0]);
          } catch (error) {
            console.error('There was an error fetching the user details!', error);
          }
        };
        if (stu_id) {  
            fetchAdmin(stu_id);
        }
      }, [stu_id]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          const StuProfile = await updateStuProfile(stu_id , user);
        }
          catch(error) {
            console.error('There was an error updating the user details!', error);
          };
      };
      
      const handleDelete = async(e) => {
        e.preventDefault();
        try{
          const deteleAccount = await deleteAcc(stu_id)
    
        }
        catch(error) {
            console.error('There was an error deleting the account!', error);
          };
      };
    
      useEffect(() => {
        const decode = decodeToken();
         const user = decode.studentId;
         console.log("user :",user)
         const userName = decode.name;
         setName(userName)
         setStu_id(user);
      },[])
      console.log("sid :",stu_id)
  return (
    <div className="adminProfile-container">
      
      <div className="profile_box">
        <FontAwesomeIcon icon={faUser} size='3x'/> {isEditing ? (
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Username:</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
        ) : (
            <div>
            <p><strong>Username:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete Account</button>
            </div>
        )}
      </div>
     </div>
  );
};


export default Admin