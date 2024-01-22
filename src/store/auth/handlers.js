export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleSignUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handleLogIn = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handleRefresh = (state, { payload }) => {
  state.profile = payload;
};

export const handleLogOut = (state, { payload }) => {
  state.profile = null;
  state.token = '';
};
