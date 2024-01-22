import { useDispatch, useSelector } from 'react-redux';
import RegistrationForm from 'components/Forms/RegistrationForm/RegistrationForm';
import { signUpThunk } from '../store/auth/thunks';
import Navigation from 'components/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import { selectProfile } from 'store/auth/selectors';
import { useEffect } from 'react';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    profile && navigate('/contacts');
  });

  const register = body => {
    dispatch(signUpThunk(body));
  };

  return (
    <>
      <Navigation></Navigation>
      <RegistrationForm register={register} />
    </>
  );
};

export default Registration;
