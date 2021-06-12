import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://192.168.1.141:2021/users';

export function updateUser(user) {
  return async dispatch => {
    try {
      const {data} = await axios.put(`${url}/${user._id}`, user);
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
