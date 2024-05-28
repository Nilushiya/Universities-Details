import React, { useEffect, useState } from 'react'
import {admin } from '../Style'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar as BootstrapNavbar, Nav, NavDropdown ,Container} from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { decodeToken, deleteAcc, fetchAdminDetails, fetchAllDetails, updateStuProfile, updateStuinfoProfile } from '../../Context/UserContext';
import NavAdmin from './NavAdmin';
import Sidebar from './Sidebar';
const Admin = () => {
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
          <NavAdmin />
            <div className="row m-0" style={{backgroundColor:"#EFECEC"}}>
              <div className="col-lg-4  col-12  sidebarr" >
                <Sidebar />        
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat repellendus corporis culpa aut laudantium sunt, a eveniet fugiat nesciunt sint vitae, quibusdam, dolore delectus assumenda eius? Tenetur, laborum sit.</p> */}
              </div>
              <div className="col-lg-6 col-12  AdminPro">
                <FontAwesomeIcon icon={faUser} size="3x" /> 
                {isEditing ? (
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
        </div>
      );
    };
    

export default Admin




{/* <div className="page">
<div className="row ">
  <div className="col-12">
      
  </div>
  <div className="col-12">
  
)}
</div>
  </div>
</div>
</div> */}