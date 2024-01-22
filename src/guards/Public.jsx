import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectProfile } from 'store/auth/selectors';

const Public = ({ children }) => {
  const profile = useSelector(selectProfile);
  const { state: prevLocation } = useLocation();
  return !profile ? children : <Navigate to={prevLocation ?? '/'} />;
};

export default Public;
