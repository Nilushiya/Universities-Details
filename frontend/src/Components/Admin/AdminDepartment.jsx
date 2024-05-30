import React, { useEffect, useState } from 'react'
import {adminDepartment} from '../Style'
import { fetchAllDepartments, fetchAllFaculty, fetchWithUni } from '../../Context/UserContext';
import NavAdmin from './NavAdmin';
import Sidebar from './Sidebar';
const AdminDepartment = () => {
    const [departments, setDepartments] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [facData, setFacData] = useState({
    departmentName: '',
    f_id: ''
  });
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  useEffect(() => {
    const getDepartments = async () => {
      const fetchAllDepartment = await fetchAllDepartments();
      console.log("All Fac: ", fetchAllDepartment.data[0]);
      setDepartments(fetchAllDepartment.data);
    };
    getDepartments();
  }, []);


  useEffect(() => {
    const getFaculties = async () => {
      const facultiesAll = await fetchWithUni();
    //   console.log("All Fac: ", facultiesAll.data);
      setFaculties(facultiesAll.data);
    };
    getFaculties();
  }, []);
  const handleCreate = async () => {
    // const newFaculty = await CreateFaculty(facData);
    // setDepartments([...faculties, newFaculty]);
    // setFacData({ departmentName: '', f_id: '' }); 
  };

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFacData((prevData) => ({
    //   ...prevData,
    //   [name]: value
    // }));
  };

  const handleUpdate = async () => {
    // const updatedFaculty = await updateFaculty(selectedFaculty.fac_id, facData);
    // setFaculties(faculties.map((faculty) => (faculty.fac_id === selectedFaculty.faculties ? updatedFaculty : faculty)));
    // setSelectedFaculty(null); 
    // window.location.reload();
    // setFacData({ departmentName: '', f_id: '' }); 
    };

  const handleDelete = async (fac_id) => {
    // await deleteFaculty(fac_id);
    // setFaculties(faculties.filter((faculty) => faculty.fac_id !== fac_id));
  };

  const handleEdit = (faculty) => {
    // setSelectedFaculty(faculty);
    // setFacData({ departmentName: faculty.departmentName, f_id: faculty.f_id });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (selectedFaculty) {
    //   handleUpdate();
    // } else {
    //   handleCreate();
    // }
  };
//   const groupByf_id = (faculties) => {
//     return faculties.reduce((groups, faculty) => {
//       const { f_id } = faculty;
//       if (!groups[f_id]) {
//         groups[f_id] = [];
//       }
//       groups[f_id].push(faculty);
//       return groups;
//     }, {});
//   };
//   const groupedFaculties = groupByf_id(faculties);

const groupFacultiesByUniversity = () => {
    const groupedFaculties = {};
    faculties.forEach(faculty => {
        const universityName = faculty[1].uniName;
        if (!groupedFaculties[universityName]) {
            groupedFaculties[universityName] = [];
        }
        groupedFaculties[universityName].push(faculty);
    });
    return groupedFaculties;
};
  return (
    <div className='adminDepartment'>
         <div className="adminProfileContainer">
        <NavAdmin />
        <div className="row m-0 adminRow" style={{ backgroundColor: "#DCF2F1" }}>
          <div className="col-lg-4 col-md-2 col-2 sidebarr">
            <Sidebar />
          </div>
          <div className="col-lg-8 col-md-10 col-10 AdminPro">
            <div className="profileAdmincontainer">
              <div className="fac">
                <h1>Department Management</h1>
                <form onSubmit={handleSubmit} className="form">
                  <input
                    type="text"
                    name="departmentName" 
                    value={facData.departmentName}
                    onChange={handleChange}
                    placeholder="Department Name"
                    required
                  />
                  <input
                    type="text"
                    name="f_id" 
                    value={facData.f_id}
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
                    <h2>Use this Fac_id to add Faculty</h2>
                    {Object.entries(groupFacultiesByUniversity()).map(([universityName, faculties]) => (
                        <li key={universityName} className="university-item">
                            <h3>{universityName}</h3>
                            <ul className="department-list">
                                {faculties.map(faculty => (
                                    <li key={faculty[0].fac_id} className="department-item">
                                        {faculty[0].facultyName}
                                        <div className="id">
                                            {faculty[0].fac_id}
                                            {/* {faculty[0].facultyName} */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
        {/* {Object.entries(groupedFaculties).map(([f_id, faculties]) => ( */}
            {/* <div key={f_id} className="f_id-group">
              <h2>University ID: {f_id}</h2> */}
              <ul className="faculty-list">
                {departments.map((department) => (
                  <li key={department.dep_id} className="department-item">
                    {department.departmentName}, {department.f_id}
                    <div className="but">
                      <button onClick={() => handleEdit(department)}>Edit</button>
                      <button onClick={() => handleDelete(department.dep_id)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            {/* </div> */}
          {/* ))} */}
        </div>
      </div>
    </div>
  )
}

export default AdminDepartment