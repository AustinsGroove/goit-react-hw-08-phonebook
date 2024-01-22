import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    width: 330,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    gap: '10px',
    fontWeight: 'bold',
    button: {
      borderRadius: 6,

      borderColor: 'transparent',
    },
    'button:hover': {
      backgroundColor: 'rgba(255, 100, 150, 0.6)',
    },
  };
});

export default Wrapper;
