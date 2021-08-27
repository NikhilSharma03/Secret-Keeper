import * as actionReducers from './actionTypes';
import axios from 'axios';

const postSecretStart = () => {
  return {
    type: actionReducers.POST_SECRET_START,
  };
};

const postSecretSuccess = () => {
  return {
    type: actionReducers.POST_SECRET_SUCCESS,
  };
};

const postSecretFailed = () => {
  return {
    type: actionReducers.POST_SECRET_FAILED,
  };
};

export const postSecret = (secret, token) => {
  return (dispatch) => {
    dispatch(postSecretStart());
    const postData = {
      text: secret,
      time: new Date(),
    };
    axios
      .post(process.env.DATABASE_URL, postData)
      .then((res) => dispatch(postSecretSuccess()))
      .catch((err) => dispatch(postSecretFailed()));
  };
};
