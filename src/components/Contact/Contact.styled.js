import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    backgroundColor: 'rgba(155, 100, 150, 0.3)',
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
      backgroundColor: 'rgba(155, 100, 150, 0.5)',
      borderRadius: 6,

      borderColor: 'transparent',
    },
    'button:hover': {
      backgroundColor: 'rgba(155, 100, 150, 0.9)',
    },
  };
});

export default Wrapper;
