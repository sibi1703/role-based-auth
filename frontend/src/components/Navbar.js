import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ role, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();  // Clear the role in App.js
    navigate('/');  // Redirect to the home page
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">MyApp</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {role ? (
          <>
            {role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
            {role === 'user' && <Link to="/user">User Dashboard</Link>}
            <button onClick={handleLogoutClick} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
