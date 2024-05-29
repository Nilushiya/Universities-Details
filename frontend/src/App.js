import React from "react";
import {BrowserRouter ,  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import University from "./Pages/University";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Detailfrom from "./Components/Detailfrom";
import Profile from "./Components/Profile";
import Friend from "./Components/Friend";
import Admin from "./Components/Admin/Admin";
import AdminUni from "./Components/Admin/AdminUni";
// import CustomNavbar from "./Components/CustomNavbar";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          {/* <CustomNavbar />    */}
          <Routes>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friend" element={<Friend />} />
            <Route path="/university" element = {<University />}>
                <Route path=":uni_id/:uniName" element = {<University />}/>
            </Route>
            <Route path="/detailform/:userId/:stuname" element={<Detailfrom />} />


            <Route path="/adminprofile" element={<Admin />}/>
            <Route path="/adminUniversity" element={<AdminUni />} />
          </Routes>

          
       </BrowserRouter>
    </div>
  );
}

export default App;