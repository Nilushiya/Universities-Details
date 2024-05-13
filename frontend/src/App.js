import React from "react";
import {BrowserRouter ,  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import University from "./Pages/University";
// import CustomNavbar from "./Components/CustomNavbar";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          {/* <CustomNavbar />    */}
          <Routes>
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