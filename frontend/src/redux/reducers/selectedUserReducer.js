import actionTypes from '../actions/actionTypes';

function selectedUserReducer(userTokens = {}, action) {
  switch (action.type) {
    case actionTypes.SIGNIN_USER:
      return action.userTokens;

    default:
      return userTokens;
  }
}

export default selectedUserReducer;
