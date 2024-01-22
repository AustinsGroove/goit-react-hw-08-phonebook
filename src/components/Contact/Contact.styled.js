import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 10,
    p: {
      fontSize: 14,
    },
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
