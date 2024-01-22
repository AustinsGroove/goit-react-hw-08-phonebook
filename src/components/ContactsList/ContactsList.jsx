import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'store/filter/selectors';
import Contact from 'components/Contact/Contact';
import Wrapper from './ContactsList.styled';
import { selectError, selectIsLoading } from 'store/contacts/selectors';

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Wrapper>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })}
      </ul>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
    </Wrapper>
  );
};

export default ContactsList;
