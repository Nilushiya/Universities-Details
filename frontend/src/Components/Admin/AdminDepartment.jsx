import React, { useEffect, useState } from 'react'
import {adminDepartment} from '../Style'
import { CreateDeparment, deleteDepartment, fetchAllDepartments, fetchAllFaculty, fetchByJoin, fetchWithUni, updateDepartment } from '../../Context/UserContext';
import NavAdmin from './NavAdmin';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
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
      const fetchAllDepartment = await fetchByJoin();
      // console.log("All Fac: ", fetchAllDepartment.data[0]);
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
    const newDepartment = await CreateDeparment(facData);
    console.log("new:",newDepartment)
        const faculty = faculties.find(f => f[0].fac_id === newDepartment.f_id);
        const university = faculty[1];
        const newDepartmentEntry = [
          { fac_id: faculty[0].fac_id, facultyName: faculty[0].facultyName, uid: faculty[0].uid },
          { uni_id: university.uni_id, uniName: university.uniName },
          { dep_id: newDepartment.dep_id, departmentName: newDepartment.departmentName, f_id: newDepartment.f_id }
        ];
        
        setDepartments([...departments, newDepartmentEntry]);
    
    setFacData({ departmentName: '', f_id: '' }); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    const updatedFaculty = await updateDepartment(selectedFaculty[2].dep_id, facData);
    // const faculty = faculties.find(f => f[0].fac_id === updatedFaculty.f_id);
    // const university = faculty[1];
    // const newDepartmentEntry = [
    //   { fac_id: faculty[0].fac_id, facultyName: faculty[0].facultyName, uid: faculty[0].uid },
    //   { uni_id: university.uni_id, uniName: university.uniName },
    //   { dep_id: updatedFaculty.dep_id, departmentName: updatedFaculty.departmentName, f_id: updatedFaculty.f_id }
    // ];
    // setDepartments(departments.map((department) => (department.f_id === selectedFaculty.departments ? updatedFaculty : department)));
    setSelectedFaculty(null); 
    window.location.reload();
    setFacData({ departmentName: '', f_id: '' }); 
    };

  const handleDelete = async (dep_id) => {
 
   const res =  await deleteDepartment(dep_id);
   console.log("res:",res)
    setDepartments(departments.filter((department) => department[2].dep_id !== dep_id));
  };

  const handleEdit = (department) => {
    setSelectedFaculty(department);
    setFacData({ departmentName: department[2].departmentName, f_id: department[2].f_id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFaculty) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };
  const groupDepartmentsByUniversity = () => {
    const groupedDepartments = {};
    departments.forEach(department => {
        const universityName = department[1].uniName;
        if (!groupedDepartments[universityName]) {
            groupedDepartments[universityName] = [];
        }
        groupedDepartments[universityName].push(department);
    });
    return groupedDepartments;
};

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
                    placeholder="Faculty Id"
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
                    <h2>Use this Fac_id to add Department</h2>
                    {Object.entries(groupFacultiesByUniversity()).map(([universityName, faculties]) => (
                        <li key={universityName} className="university-item">
                            <h3>{universityName}</h3>
                            <ul className="department-list">
                                {faculties.map(faculty => (
                                    <li key={faculty[0].fac_id} className="departments-item">
                                       
                                        <div className="id">
                                        <div>{faculty[0].facultyName}</div>
                                        {faculty[0].fac_id}
                                            {/* {faculty[0].facultyName} */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                {Object.entries(groupDepartmentsByUniversity()).map(([universityName, departments]) => (
                 <div key={departments} className="f_id-group">
                <h2> {universityName}</h2> 
              <ul className="faculty-list">
                {departments.map((department) => (
                  <li key={department[2].dep_id} className="department-item">
                    {department[2].departmentName}, {department[2].f_id}
                    {/* <div className="infor"> */}
                    
                    {/* </div> */}
                    <div className="but">
                      <button onClick={() => handleEdit(department)}>Edit</button>
                      <button onClick={() => handleDelete(department[2].dep_id)}>Delete</button>
                      <Link className='link' to={`/course/${department[2].departmentName}/${department[2].dep_id}`} style={{ textDecoration: 'none' }}>Add/Update Course details</Link>
                    </div>
                  </li>
                ))}
              </ul>
             </div> 
         ))}  
        </div>
      </div>
    </div>
  )
}

export default AdminDepartment