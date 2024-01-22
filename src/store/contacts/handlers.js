export const getContactsHandler = (state, { payload }) => {
  state.items = payload;
};

export const addContactHandler = (state, { payload }) => {
  state.items.push(payload);
};

export const deleteContactHandler = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};
