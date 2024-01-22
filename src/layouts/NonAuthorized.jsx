import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';

const NonAuthorized = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default NonAuthorized;
