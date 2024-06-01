import React, { useEffect, useState } from 'react'
import NavAdmin from './NavAdmin'
import Sidebar from './Sidebar'
import { changeUserType, deleteAcc, fetchAllUser } from '../../Context/UserContext';
import { userManagement } from '../Style';
const UserManagement = () => {
    const [email, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const [allUser , setAllUser] = useState([])
  
    useEffect(() =>{
      const getAllUser = async() => {
        try{
          const response = await fetchAllUser()
          // console.log("res : ",response.data)
          setAllUser(response.data)
        }
        catch(err){
          console.log("Error : ",err);
        }
      }
      getAllUser()
    },[])
    const handleEmailChange = (e) => setUserEmail(e.target.value);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await changeUserType(email);
        // console.log("res:",response)
        setMessage(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setMessage('User not found');
        } else {
          setMessage('An error occurred');
        }
      }
      setUserEmail('')
    };

    const handleDelete = async(id) => {
      const response = await deleteAcc(id)
      window.location.reload()
      // console.log("reszz : ",response)
    }
  return (
    <div className='userManagement'>
         <div className="adminProfileContainer">
        <NavAdmin />
          <div className="row m-0 adminRow" style={{backgroundColor:"#DCF2F1"}}>
            <div className="col-lg-4 col-md-2 col-2  sidebarr" >
              <Sidebar />        
            </div>
            <div className="col-lg-8 col-md-10 col-10  AdminPro" >
              <div className="Admincontainer">
              <h1>User Management</h1>
                <div className="typeChange">
                  <h3>Admin Privilege Restriction</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                        {/* <label htmlFor="email">User Email:</label> */}
                        <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder='User Email' required />
                        </div>
                        <button type="submit">Change User Type</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
              </div>
            </div>         
          </div>
          <div className="uniList">
            <h1>All User</h1>
            <ul className="university-list">
              <h3>{allUser.length} users are here</h3>
              {allUser.map((user ) => (
                <li key={user[1].studentId} className="university-item">
                  {user[1].email} 
                  <div className="but">
                    {/* <button onClick={() => handleEdit(university)}>Edit</button> */}
                    <button onClick={() => handleDelete(user[1].studentId)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default UserManagement