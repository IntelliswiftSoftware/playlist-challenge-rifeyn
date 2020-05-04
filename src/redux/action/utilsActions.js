import { bindActionCreators } from 'redux';
import { store } from '../store/store';

const showLoadingSymbol = () => (dispatch, getState) => {
  const currentState = getState();
  if (!currentState.utilsReducer.isLoading) {
    dispatch({ type: 'ACTION_SHOW_LOADING' });
  }
};

const hideLoadingSymbol = () => (dispatch, getState) => {
  const currentState = getState();
  if (currentState.utilsReducer.isLoading) {
    dispatch({ type: 'ACTION_HIDE_LOADING' });
  }
};

const loginData = data => (dispatch) => {
  dispatch({
    type: 'ACTION_LOGIN',
    payload: {
      data,
    },
  });
};

const loadingActions = bindActionCreators(
  {
    showLoadingSymbol,
    hideLoadingSymbol,
    loginData,
  },
  store.dispatch,
);

export default loadingActions;
