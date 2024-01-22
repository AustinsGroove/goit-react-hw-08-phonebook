import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    borderRadius: 10,
    width: 330,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    gap: '10px',
    fontWeight: 'bold',
  };
});

export default Wrapper;
