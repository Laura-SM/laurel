import actionTypes from '../actions/actionTypes';

function selectedPlantReducer(selectedPlant = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PLANT:
      return action.selectedPlant;

    default:
      return selectedPlant;
  }
}

export default selectedPlantReducer;
