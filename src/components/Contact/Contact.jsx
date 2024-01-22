import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'store/contacts/thunks';
import Wrapper from './Contact.styled';
import { selectToken } from 'store/auth/selectors';

const Contact = ({ name, number, id }) => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const deleteContactHandler = () => {
    const body = {
      id,
      token,
    };
    dispatch(deleteContactThunk(body));
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
