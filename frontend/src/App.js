import React from "react";
import {BrowserRouter ,  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import University from "./Pages/University";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
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
            <Route path="/university" element = {<University />}>
                <Route path=":uni_id/:uniName" element = {<University />}/>
            </Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;