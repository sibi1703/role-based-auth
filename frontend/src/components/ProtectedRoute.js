import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role, allowedRole, children }) => {
  if (!role || role !== allowedRole) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
