import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'store/filter/selectors';
import Contact from 'components/Contact/Contact';
import Wrapper from './ContactsList.styled';

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
    </Wrapper>
  );
};

export default ContactsList;
