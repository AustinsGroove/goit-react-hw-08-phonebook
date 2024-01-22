import { NavLink } from 'react-router-dom';
import Wrapper from './Navigation.styled';

const Navigation = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navigation;
