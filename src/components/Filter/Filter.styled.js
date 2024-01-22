import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 330,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    marginBottom: '10px',
    alignItems: 'center',
    gap: 10,
    padding: 10,
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
  };
});

export default Wrapper;
