import actionTypes from '../actions/actionTypes';

function selectedUserReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.GET_USER:
      return action.user;

    default:
      return user;
  }
}

export default selectedUserReducer;
