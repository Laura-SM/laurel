import {combineReducers} from 'redux';
import plantsReducer from './plantsReducer';
import selectedPlantReducer from './selectedPlantReducer';
import signInReducer from './signInReducer';
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
  plants: plantsReducer,
  selectedPlant: selectedPlantReducer,
  userAccess: signInReducer,
  user: signUpReducer,
});

export default rootReducer;
