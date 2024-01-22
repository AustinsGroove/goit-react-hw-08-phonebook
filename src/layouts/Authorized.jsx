import UserMenu from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';

const Authorized = () => {
  return (
    <>
      <UserMenu />
      <Outlet />
    </>
  );
};

export default Authorized;
