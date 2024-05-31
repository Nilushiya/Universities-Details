import React, { useEffect, useState } from 'react'
import NavAdmin from './NavAdmin'
import Sidebar from './Sidebar'
import {sidebar} from './Sidebar'
import { CreateUniversity, deleteUniversity, fetchUniversity, updateUniversity } from '../../Context/UserContext'
const AdminUni = () => {
  const [universities, setUniversities] = useState([]);
  const [uniname, setName] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  useEffect(() => {
    const getUniversities = async () => {
      const universities = await fetchUniversity();
      // console.log("uni" , universities[0])
      setUniversities(universities);
    };
    getUniversities();
  }, []);

  const handleCreate = async () => {
    const newUniversity = await CreateUniversity({ uniname });
    setUniversities([...universities, newUniversity]);
    setName('');
  };

  const handleUpdate = async () => {
    const updatedUniversity = await updateUniversity(selectedUniversity.uni_id, { uniname });
    setUniversities(universities.map((university) => (university.id === selectedUniversity.uni_id ? updatedUniversity : university)));
    setSelectedUniversity(null);
    window.location.reload();
    setName('');
  };

  const handleDelete = async (uni_id) => {
    await deleteUniversity(uni_id);
    setUniversities(universities.filter((university) => university.uni_id !== uni_id));
  };

  const handleEdit = (university) => {
    console.log("unina : " ,university )
    setSelectedUniversity(university);
    setName(university.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUniversity) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };
  return (
    <div className='adminUni'>
      <div className="adminProfileContainer">
        <NavAdmin />
          <div className="row m-0 adminRow" style={{backgroundColor:"#DCF2F1"}}>
            <div className="col-lg-4 col-md-2 col-2  sidebarr" >
              <Sidebar />        
            </div>
            <div className="col-lg-8 col-md-10 col-10  AdminPro" >
              <div className="profileAdmincontainer">
                <div className="uni">
                  <h1>University Management</h1>
                  <form onSubmit={handleSubmit} className="form">
                    <input 
                      type="text" 
                      value={uniname} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="University Name" 
                      required 
                    />
                    <button type="submit">{selectedUniversity ? 'Update' : 'Add'}</button>
                  </form>
                </div>
              </div>
            </div>         
          </div>
          <div className="uniList">
            <h1 style={{textAlign:"center"}}>Universities</h1>
            <ul className="university-list">
              {universities.map((university  ) => (
                <li key={university.uni_id} className="university-item">
                {university.uniName} 
                  <div className="but">
                    <button onClick={() => handleEdit(university)}>Edit</button>
                    <button onClick={() => handleDelete(university.uni_id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default AdminUni