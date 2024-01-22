import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    ul: {
      display: 'flex',
      padding: '10px',
      gap: '10px',
      fontWeight: 'bold',
      li: {
        a: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
        'a.active': {
          color: 'rgba(255, 255, 255, 0.9)',
        },
        'a:hover': {
          color: 'rgba(255, 150, 150, 0.9)',
        },
      },
    },
  };
});

export default Wrapper;
