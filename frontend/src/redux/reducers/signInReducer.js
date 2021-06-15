import actionTypes from '../actions/actionTypes';

function signInReducer(userTokens = {}, action) {
  let updatedUserTokens = userTokens;
  switch (action.type) {
    case actionTypes.SIGNIN_USER:
      updatedUserTokens = action.userTokens;
      break;
    default:
      updatedUserTokens;
      break;
  }
  return updatedUserTokens;
}

export default signInReducer;
