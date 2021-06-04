import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://192.168.8.104:2021/login';

export function loadUser(user) {
  return async dispatch => {
    try {
      const {data} = await axios.post(url, user);
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
