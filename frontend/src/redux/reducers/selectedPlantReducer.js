import actionTypes from '../actions/actionTypes';

function selectedPlantReducer(selectedPlant = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PLANT:
      return action.selectedPlant;
    case actionTypes.ADD_PLANT:
      selectedPlant = action.plant;
      return selectedPlant;

    default:
      return selectedPlant;
  }
}

export default selectedPlantReducer;
