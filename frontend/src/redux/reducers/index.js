import {combineReducers} from 'redux';
import plantsReducer from './plantsReducer';
import selectedPlantReducer from './selectedPlantReducer';
import selectedUserReducer from './selectedUserReducer';

const rootReducer = combineReducers({
  plants: plantsReducer,
  selectedPlant: selectedPlantReducer,
  userAccess: selectedUserReducer,
});

export default rootReducer;
