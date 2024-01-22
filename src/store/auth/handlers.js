export const handleSignUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handleLogIn = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handleLogOut = state => {
  state.profile = null;
  state.token = '';
};

export const handleRefresh = (state, { payload }) => {
  state.profile = payload;
};
