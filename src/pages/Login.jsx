import { useDispatch, useSelector } from 'react-redux';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import { logInThunk } from '../store/auth/thunks';
import Navigation from 'components/Navigation/Navigation';
import { selectProfile } from 'store/auth/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(selectProfile);
  
  useEffect(() => {
    profile && navigate('/contacts');
  });

  const login = body => {
    dispatch(logInThunk(body));
  };
  return (
    <>
      <Navigation></Navigation>
      <LoginForm login={login} />
    </>
  );
};

export default Login;
