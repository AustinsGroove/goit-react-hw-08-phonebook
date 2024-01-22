import { api } from './api';

export const getContactsApi = async token => {
  const { data } = await api(`/contacts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const addContactApi = async ({ data: contactData, token }) => {
  const { data } = await api.post(`/contacts`, contactData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteContactApi = async ({ id, token }) => {
  const { data } = await api.delete(`/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
