import { useDispatch } from 'react-redux';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import { logInThunk } from '../store/auth/thunks';
import Navigation from 'components/Navigation/Navigation';

const Login = () => {
  const dispatch = useDispatch();

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
