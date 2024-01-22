// import Navigation from 'components/Navigation/Navigation';
// import Authorized from 'layouts/Authorized';
// import NonAuthorized from 'layouts/NonAuthorized';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import { Route, Routes } from 'react-router-dom';
//
export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Contacts />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};
