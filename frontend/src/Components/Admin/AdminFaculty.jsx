import React, { useEffect, useState } from 'react';
import { CreateFaculty, deleteFaculty, fetchAllFaculty, fetchUniversity, updateFaculty } from '../../Context/UserContext';
import NavAdmin from './NavAdmin';
import Sidebar from './Sidebar';

const AdminFaculty = () => {
  const [universities, setUniversities] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [facData, setFacData] = useState({
    facultyName: '',
    uid: ''
  });
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    const getFaculties = async () => {
      const facultiesAll = await fetchAllFaculty();
      // console.log("All Fac: ",facultiesAll)
      setFaculties(facultiesAll.data);
    };
    getFaculties();
  }, []);

  useEffect(() => {
    const getUniversities = async () => {
      const universities = await fetchUniversity();
      // console.log("uni" , universities[0])
      setUniversities(universities);
    };
    getUniversities();
  }, []);
  const handleCreate = async () => {
    const newFaculty = await CreateFaculty(facData);
    setFaculties([...faculties, newFaculty]);
    setFacData({ facultyName: '', uid: '' }); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    const updatedFaculty = await updateFaculty(selectedFaculty.fac_id, facData);
    setFaculties(faculties.map((faculty) => (faculty.fac_id === selectedFaculty.faculties ? updatedFaculty : faculty)));
    setSelectedFaculty(null); 
    window.location.reload();
    setFacData({ facultyName: '', uid: '' }); 
    };

  const handleDelete = async (fac_id) => {
    await deleteFaculty(fac_id);
    setFaculties(faculties.filter((faculty) => faculty.fac_id !== fac_id));
  };

  const handleEdit = (faculty) => {
    setSelectedFaculty(faculty);
    setFacData({ facultyName: faculty.facultyName, uid: faculty.uid });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFaculty) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };
  const groupByuId = (faculties) => {
    return faculties.reduce((groups, faculty) => {
      const { uid } = faculty;
      if (!groups[uid]) {
        groups[uid] = [];
      }
      groups[uid].push(faculty);
      return groups;
    }, {});
  };
  const groupedFaculties = groupByuId(faculties);
  return (
    <div className="adminFaculty">
      <div className="adminProfileContainer">
        <NavAdmin />
        <div className="row m-0 adminRow" style={{ backgroundColor: "#DCF2F1" }}>
          <div className="col-lg-4 col-md-2 col-2 sidebarr">
            <Sidebar />
          </div>
          <div className="col-lg-8 col-md-10 col-10 AdminPro">
            <div className="profileAdmincontainer">
              <div className="fac">
                <h1>Faculty Management</h1>
                <form onSubmit={handleSubmit} className="form">
                  <input
                    type="text"
                    name="facultyName" 
                    value={facData.facultyName}
                    onChange={handleChange}
                    placeholder="Faculty Name"
                    required
                  />
                  <input
                    type="text"
                    name="uId" 
                    value={facData.uid}
                    onChange={handleChange}
                    placeholder="University Id"
                    required
                  />
                  <button type="submit">{selectedFaculty ? 'Update' : 'Add'}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="uniList">
        <ul className="university-list">
          <h2>Use this uniId to add Faculty</h2>
              {universities.map((university ) => (
                <li key={university.uni_id} className="university-item">
                  {university.uniName} 
                  <div className="id">
                  {university.uni_id}
                  </div>
                </li>
              ))}
            </ul>
        {Object.entries(groupedFaculties).map(([uid, faculties]) => (
            <div key={uid} className="uId-group">
              <h2>University ID: {uid}</h2>
              <ul className="faculty-list">
                {faculties.map((faculty) => (
                  <li key={faculty.fac_id} className="faculty-item">
                    {faculty.facultyName}
                    <div className="but">
                      <button onClick={() => handleEdit(faculty)}>Edit</button>
                      <button onClick={() => handleDelete(faculty.fac_id)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminFaculty;
