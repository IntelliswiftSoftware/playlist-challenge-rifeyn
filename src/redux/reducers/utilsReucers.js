const utilsReducers = (
  state = {
    isLoading: false,
  },
  action,
) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'ACTION_SHOW_LOADING':
      newState.isLoading = true;
      newState.loaderStyles = action.payload;
      return newState;
    case 'ACTION_HIDE_LOADING':
      newState.isLoading = false;
      return newState;
    default:
      return state;
  }
};
export default utilsReducers;
