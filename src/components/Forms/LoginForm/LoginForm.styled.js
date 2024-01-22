import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 330,
    borderRadius: 10,
    marginBottom: 10,
    form: {
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      alignItems: 'center',
      gap: 5,
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
    },
    input: {
      width: 280,
      borderRadius: 10,
      padding: 5,
      borderColor: 'transparent',
    },
    button: {
      width: 170,
      margin: 10,
      borderRadius: 10,
      padding: 5,
      borderColor: 'transparent',
    },
    'button:hover': {
      backgroundColor: 'rgba(155, 100, 150, 0.6)',
    },
  };
});

export default Wrapper;
