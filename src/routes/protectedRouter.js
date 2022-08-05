import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from '../context/authContext';
const ProtectedRoute = ({ children, path }) => {
	

	return <Route path={path}>{children}</Route>;
};

export default ProtectedRoute;
