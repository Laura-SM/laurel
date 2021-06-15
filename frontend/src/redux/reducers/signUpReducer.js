import actionTypes from '../actions/actionTypes';

function signUpReducer(user = {}, action) {
  let updatedUser = {};
  if (action.type === actionTypes.SIGNUP_USER) {
    updatedUser = action.user;
  } else {
    updatedUser = user;
  }
  return updatedUser;
}

export default signUpReducer;
