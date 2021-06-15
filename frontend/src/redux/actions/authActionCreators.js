import axios from 'axios';
import actionTypes from './actionTypes';
import {env} from '../../../.env.js';

const url = env.REACT_APP_PORT;

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
