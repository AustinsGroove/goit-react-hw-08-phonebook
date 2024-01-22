export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload, error }) => {
  state.isLoading = false;
  state.error = error?.message || payload?.message || payload || 'Some error.';
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
