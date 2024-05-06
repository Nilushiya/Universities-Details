import React from "react";
import {BrowserRouter ,  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CustomNavbar from "./Components/CustomNavbar";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
