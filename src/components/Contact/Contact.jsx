import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contacts/thunks';
import Wrapper from './Contact.styled';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteContactHandler = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <Wrapper>
      <button type="button" onClick={deleteContactHandler}>
        Delete
      </button>
      <p>{name}:</p>
      <p>{number}</p>
    </Wrapper>
  );
};

export default Contact;
