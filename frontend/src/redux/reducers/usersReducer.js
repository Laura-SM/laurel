import actionTypes from '../actions/actionTypes';

function usersReducer(users = [], action) {
  let updatedUsers = [];
  if (action.type === actionTypes.UPDATE_USER) {
    updatedUsers = users.map(user =>
      user._id === action.user._id ? {...user, ...action.user} : user,
    );
  } else {
    updatedUsers = users;
  }
  return updatedUsers;
}

export default usersReducer;
