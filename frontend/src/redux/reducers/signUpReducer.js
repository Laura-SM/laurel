import actionTypes from '../actions/actionTypes';

function signUpReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_USER:
      return action.user;

    default:
      return user;
  }
}

export default signUpReducer;
