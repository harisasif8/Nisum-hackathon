import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import Name from './components/Name';
import Email from './components/Email';
import Password from './components/Password';
import Jobrole from './components/JobRole';
import Dob from './components/Dob';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path={'name'} element={<Name />} />
            <Route exact path={'email'} element={<Email />} />
            <Route exact path={'password'} element={<Password />} />
            <Route exact path={'jobrole'} element={<Jobrole />} />
            <Route exact path={'dob'} element={<Dob/>} />


          </Routes>

        </Router>
      </UserProvider>

    </div>
  );
}

export default App;
