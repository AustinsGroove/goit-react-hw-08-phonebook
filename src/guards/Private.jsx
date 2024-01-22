import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectProfile } from 'store/auth/selectors';

const Private = ({ children }) => {
  const profile = useSelector(selectProfile);
  const location = useLocation();
  return profile ? children : <Navigate to="/login" state={location} />;
};

export default Private;
