import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import Private from 'guards/Private';
import Public from 'guards/Public';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectProfile, selectToken } from 'store/auth/selectors';
import { refreshThunk } from 'store/auth/thunks';
//
export const App = () => {
  const token = useSelector(selectToken);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    token && !profile && dispatch(refreshThunk());
  }, [dispatch, profile, token]);

  return (
    <>
      <h1>Your Phonebook</h1>
      <Routes>
        <Route
          index
          element={
            <Private>
              <Contacts />
            </Private>
          }
        />
        <Route
          path="contacts"
          element={
            <Private>
              <Contacts />
            </Private>
          }
        />
        <Route
          path="login"
          element={
            <Public>
              <Login />
            </Public>
          }
        />
        <Route
          path="register"
          element={
            <Public>
              <Registration />
            </Public>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Loader />
      <Error />
    </>
  );
};
