import actionTypes from '../actions/actionTypes';

function signInReducer(userTokens = {}, action) {
  let updatedUserTokens = {};
  if (action.type === actionTypes.SIGNIN_USER) {
    updatedUserTokens = action.userTokens;
  } else {
    updatedUserTokens = userTokens;
  }
  return updatedUserTokens;
}

export default signInReducer;
