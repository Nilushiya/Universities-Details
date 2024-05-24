import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { profile } from './Style'
import { decodeToken } from '../Context/UserContext';
const Profile = () => {
  const [user, setUser1] = useState({
    // firstName: '',
    phone: '',
    address: ''
  });
  const [user1, setUser2] = useState({
    // firstName: '',
    username: '',
    email: '',
  });
  const[stu_id , setStu_id] = useState('');
  const[customerName , setName] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log(stu_id)
    axios.get(`http://localhost:8080/api/v1/studentInfo/findCuromer/${stu_id}`)
      .then(response => {
        console.log('get user :',response.data[0][0]);
        console.log('get user1 :',response.data[0][1]);
        setUser1(response.data[0][0]);
        setUser2(response.data[0][1]);
      })
      .catch(error => {
        console.error('There was an error fetching the user details!', error);
      });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stu_id)
    axios.put(`http://localhost:8080/api/v1/studentInfo/updateUser/${stu_id}`, user)
      .then(response => {
        console.log('User details updated successfully',response);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('There was an error updating the user details!', error);
      });
  };
  
  const handleDelete = () => {
    axios.delete('/api/user/details')
      .then(response => {
        console.log('Account deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the account!', error);
      });
  };
  useEffect(() => {
    const decode = decodeToken();
     const user = decode.studentId;
     const userName = decode.name;
     setName(userName)
     setStu_id(user);
     console.log('user' , user);
  },[])
  return (
    <div className="profile-container">
      <FontAwesomeIcon icon={faUser} size='3x'/> {isEditing ? (
        <form onSubmit={handleSubmit}>
          {/* <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
          </div> */}
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
            <input type="number" name="phone" value={user.phone} onChange={handleChange} />
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
  );
};

export default Profile