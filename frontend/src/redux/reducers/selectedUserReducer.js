import actionTypes from '../actions/actionTypes';

function selectedUserReducer(userToken = {}, action) {
  switch (action.type) {
    case actionTypes.GET_USER:
      return action.userToken;

    default:
      return userToken;
  }
}

export default selectedUserReducer;
