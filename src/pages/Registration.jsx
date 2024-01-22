import { useDispatch } from 'react-redux';
import RegistrationForm from 'components/Forms/RegistrationForm/RegistrationForm';
import { signUpThunk } from '../store/auth/thunks';
import Navigation from 'components/Navigation/Navigation';

const Registration = () => {
  const dispatch = useDispatch();

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
