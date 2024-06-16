import React, { useEffect } from "react";
import {BrowserRouter ,  Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import University from "./Pages/University";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Detailfrom from "./Components/Detailfrom";
import Profile from "./Components/Profile";
import Friend from "./Components/Friend";
import Admin from "./Components/Admin/Admin";
import AdminUni from "./Components/Admin/AdminUni";
import AdminFaculty from "./Components/Admin/AdminFaculty";
import Queston from "./Components/Admin/Queston";
import AdminDepartment from "./Components/Admin/AdminDepartment";
import UserManagement from "./Components/Admin/UserManagement";
import Course from "./Components/Admin/Course";
import { UserProvider, useUserContext } from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import CustomNavbar from "./Components/CustomNavbar";

// const RedirectBasedOnRole = () => {
//   const { userRole, loading } = useUserContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!loading) {
//       if (userRole === 'admin') {
//         navigate('/adminprofile');
//       }
//       if(userRole === 'user') {
//         navigate('/')
//       }
//     }
//   }, [userRole, loading, navigate]);

//   return null;
// };

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friend" element={<Friend />} />
            <Route path="/university" element={<University />}>
              <Route path=":uni_id/:uniName" element={<University />} />
            </Route>
            <Route path="/detailform/:userId/:stuname" element={<Detailfrom />} />

            {/* Admin Routes */}
            <Route path="/adminprofile" element={
              <ProtectedRoute requiredRole="ADMIN">
                <Admin />
               </ProtectedRoute>
            } />
            <Route path="/adminUniversity" element={
              <ProtectedRoute requiredRole="admin">
                <AdminUni />
              </ProtectedRoute>
            } />
            <Route path="/adminFac" element={
              <ProtectedRoute requiredRole="admin">
                <AdminFaculty />
              </ProtectedRoute>
            } />
            <Route path="/user-question" element={
              <ProtectedRoute requiredRole="admin">
                <Queston />
              </ProtectedRoute>
            } />
            <Route path="/adminDepartment" element={
              <ProtectedRoute requiredRole="admin">
                <AdminDepartment />
              </ProtectedRoute>
            } />
            <Route path="/user" element={
              <ProtectedRoute requiredRole="admin">
                <UserManagement />
              </ProtectedRoute>
            } />
            <Route path="/course/:departmentName/:dep_id" element={
              <ProtectedRoute requiredRole="admin">
                <Course />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;