import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import Home from './components/Home';
import { JobProvider } from './contexts/JobContext';
import Form from './components/Form';



function App() {

  return (
    <div>
      <UserProvider>
        <Router>
          <JobProvider>
            <Routes>
              <Route exact path={'home'} element={<Home />} />
              <Route exact path={'form'} element={<Form />} />
            </Routes>
          </JobProvider>
        </Router>
      </UserProvider>

    </div>
  );
}

export default App;
