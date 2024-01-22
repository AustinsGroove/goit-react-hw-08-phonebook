import { useDispatch, useSelector } from 'react-redux';
import { selectProfile, selectToken } from 'store/auth/selectors';
import Wrapper from './UserMenu.styled';
import { logOutThunk } from 'store/auth/thunks';

const UserMenu = () => {
  const profile = useSelector(selectProfile);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOutThunk(token));
  };

  return (
    <Wrapper>
      <p>{profile?.name}</p>
      <button onClick={logoutHandler}>Logout</button>
    </Wrapper>
  );
};

export default UserMenu;
