import { useSelector } from 'react-redux';
import { selectGlobalError } from 'store/root/selectors';
import Wrapper from './Error.styled';

const Error = () => {
  const error = useSelector(selectGlobalError);
  return error ? <Wrapper>{<h3>Error: {error}</h3>}</Wrapper> : null;
};

export default Error;
