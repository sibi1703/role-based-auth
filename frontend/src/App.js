import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import User from './components/User';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  const [role, setRole] = useState(null);

  const handleLogout = () => {
    setRole(null);
  };

  return (
    <Router>
      <div className="app">
        <Navbar role={role} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setRole={setRole} />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute role={role} allowedRole="admin">
                <Admin />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/user" 
            element={
              <ProtectedRoute role={role} allowedRole="user">
                <User />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
