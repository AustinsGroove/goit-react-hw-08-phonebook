import InputForm from '../components/Forms/InputForm/InputForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfile } from 'store/auth/selectors';
import { useEffect } from 'react';
import { addContactThunk, getContactsThunk } from 'store/contacts/thunks';
import UserMenu from 'components/UserMenu/UserMenu';
//
const Contacts = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    profile && dispatch(getContactsThunk());
  }, [dispatch, profile]);

  const addContactHandler = data => {
    dispatch(addContactThunk(data));
  };

  return (
    <>
      <UserMenu></UserMenu>
      <h2>Add new contact</h2>
      <InputForm addContactHandler={addContactHandler} />
      <h2>Find contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
