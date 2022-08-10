import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import Login from './components/Login';
import SignUp from './components/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path={'login'} element={<Login />} />
            <Route exact path={'signup'} element={<SignUp />} />

          </Routes>
        </Router>
      </UserProvider>

    </div>
  );
}

export default App;
