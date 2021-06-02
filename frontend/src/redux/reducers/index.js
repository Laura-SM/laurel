import {combineReducers} from 'redux';
import plantsReducer from './plantsReducer';
import selectedPlantReducer from './selectedPlantReducer';

const rootReducer = combineReducers({
  plants: plantsReducer,
  selectedPlant: selectedPlantReducer,
});

export default rootReducer;
