import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { profile } from './Style'
import { decodeToken, deleteAcc, fetchAllDetails, updateStuProfile, updateStuinfoProfile } from '../Context/UserContext';
import CustomNavbar from './CustomNavbar';
const Profile = () => {
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
  const [isEditing, setIsEditing] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser1(prevState => ({
      ...prevState,
      [name]: value
    }));
    setUser2(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const StuinfoProfile = await updateStuinfoProfile(stu_id , user);
      const StuProfile = await updateStuProfile(stu_id , user1);
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
     const userName = decode.name;
     setName(userName)
     setStu_id(user);
  },[])

  return (
    <div className="profile-container">
    <CustomNavbar />
      <div className="profile_box">
      <FontAwesomeIcon icon={faUser} size='3x'/> {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" name="name" value={user1.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={user1.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phone" value={user.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" value={user.address} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          {/* <p><strong>First Name:</strong> {user.firstName}</p> */}
          <p><strong>Username:</strong> {user1.name}</p>
          <p><strong>Email:</strong> {user1.email}</p>
          <p><strong>Phone Number:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete Account</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Profile