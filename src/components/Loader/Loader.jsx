import React from 'react';
import { useSelector } from 'react-redux';
import { selectGlobalLoading } from 'store/root/selectors';

const Loader = () => {
  const isLoading = useSelector(selectGlobalLoading);
  return isLoading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : null;
};

export default Loader;
