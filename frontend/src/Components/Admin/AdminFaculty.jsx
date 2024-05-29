import React, { useEffect, useState } from 'react';
import { CreateFaculty, fetchAllFaculty } from '../../Context/UserContext';
import NavAdmin from './NavAdmin';
import Sidebar from './Sidebar';

const AdminFaculty = () => {
  const [faculties, setFaculties] = useState([]);
  const [facData, setFacData] = useState({
    facultyName: '',
    uid: ''
  });
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    const getFaculties = async () => {
      const facultiesAll = await fetchAllFaculty();
      setFaculties(facultiesAll.data);
    };
    getFaculties();
  }, []);

  const handleCreate = async () => {
    const newFaculty = await CreateFaculty(facData);
    setFaculties([...faculties, newFaculty]);
    setFacData({ facultyName: '', uid: '' }); // Reset form data
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    // Handle update logic here
    // Update faculties state with the updated faculty
    setSelectedFaculty(null); // Clear selected faculty after update
  };

  const handleDelete = async (fac_id) => {
    // Handle delete logic here
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
                    name="facultyName" // Corrected name attribute
                    value={facData.facultyName}
                    onChange={handleChange}
                    placeholder="Faculty Name"
                    required
                  />
                  <input
                    type="text"
                    name="uid" // Corrected name attribute
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
          <ul className="faculty-list">
            {faculties.map((faculty) => (
              <li key={faculty.fac_id} className="faculty-item">
                {faculty.facultyName},{faculty.uid}
                <div className="but">
                  <button onClick={() => handleEdit(faculty)}>Edit</button>
                  <button onClick={() => handleDelete(faculty.fac_id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminFaculty;
