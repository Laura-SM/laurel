import actionTypes from '../actions/actionTypes';

function signUpReducer(user = {}, action) {
  let updatedUser = user;
  switch (action.type) {
    case actionTypes.SIGNUP_USER:
      updatedUser = action.user;
      break;
    default:
      updatedUser;
      break;
  }
  return updatedUser;
}

export default signUpReducer;
