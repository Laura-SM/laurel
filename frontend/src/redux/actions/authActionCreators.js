import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://192.168.8.104:2021';

export function signInUser(user) {
  return async dispatch => {
    try {
      const {data} = await axios.post(`${url}/signin`, user);
      dispatch({
        type: actionTypes.SIGNIN_USER,
        userTokens: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_ERROR,
      });
    }
  };
}

export function signUpUser(user) {
  return async dispatch => {
    try {
      const {data} = await axios.post(`${url}/signup`, user);
      dispatch({
        type: actionTypes.SIGNUP_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_ERROR,
      });
    }
  };
}
