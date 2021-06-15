import axios from 'axios';
import actionTypes from './actionTypes';
import {env} from '../../../.env.js';

const url = env.REACT_APP_PORT;

export function updateUser(user) {
  return async dispatch => {
    try {
      const {data} = await axios.put(`${url}/users/${user._id}`, user);
      dispatch({
        type: actionTypes.UPDATE_USER,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_ERROR,
      });
    }
  };
}
