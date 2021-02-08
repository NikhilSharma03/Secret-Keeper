import * as actionCreators from './actionTypes';
import Axios from 'axios';

const fetchSecretsStart = () => {
  return {
    type: actionCreators.FETCH_SECRET_START,
  };
};

const fetchSecretsSuccess = (data) => {
  return {
    type: actionCreators.FETCH_SECRET_SUCCESS,
    data: data,
  };
};

const fetchSecretsFailed = () => {
  return {
    type: actionCreators.FETCH_SECRET_FAILED,
  };
};

export const fetchSecrets = () => {
  return (dispatch) => {
    dispatch(fetchSecretsStart());
    Axios.get('https://secretkeeper-a7e5a.firebaseio.com/Secrets.json')
      .then((res) => dispatch(fetchSecretsSuccess(res.data)))
      .catch((err) => dispatch(fetchSecretsFailed()));
  };
};
