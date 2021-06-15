import actionTypes from '../actions/actionTypes';

function usersReducer(users = [], action) {
  let updatedUsers = users;
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      updatedUsers = users.map(user =>
        user._id === action.user._id ? {...user, ...action.user} : user,
      );
      break;
    default:
      updatedUsers;
      break;
  }
  return updatedUsers;
}

export default usersReducer;
