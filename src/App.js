import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import Login from './components/Login';


function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path={'login'} element={<Login />} />
          </Routes>
        </Router>
      </UserProvider>

    </div>
  );
}

export default App;
