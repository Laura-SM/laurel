import {combineReducers} from 'redux';
import plantsReducer from './plantsReducer';
import selectedPlantReducer from './selectedPlantReducer';
import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  plants: plantsReducer,
  selectedPlant: selectedPlantReducer,
  userAccess: signInReducer,
  user: signUpReducer,
  users: usersReducer,
});

export default rootReducer;
