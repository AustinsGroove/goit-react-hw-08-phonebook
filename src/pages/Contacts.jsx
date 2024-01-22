import InputForm from '../components/Forms/InputForm/InputForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfile, selectToken } from 'store/auth/selectors';
import { useEffect } from 'react';
import { refreshThunk } from 'store/auth/thunks';
import { addContactThunk, getContactsThunk } from 'store/contacts/thunks';
import { useNavigate } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
//
const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const profile = useSelector(selectProfile);

  useEffect(() => {
    if (token) dispatch(refreshThunk(token));
  }, [dispatch, token]);

  useEffect(() => {
    profile ? dispatch(getContactsThunk(token)) : navigate('/login');
  }, [dispatch, navigate, profile, token]);

  const addContactHandler = data => {
    const body = {
      data,
      token,
    };
    dispatch(addContactThunk(body));
  };

  return (
    <>
      <h1>Your Phonebook</h1>
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
