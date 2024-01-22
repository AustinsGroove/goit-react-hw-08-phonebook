import { useSelector } from 'react-redux';
import { selectGlobalError } from 'store/root/selectors';

const Error = () => {
  const error = useSelector(selectGlobalError);
  return error ? (
    <div>
      <h3>`Error: ${error}`</h3>
    </div>
  ) : null;
};

export default Error;
