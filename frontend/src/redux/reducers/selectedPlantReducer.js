import actionTypes from '../actions/actionTypes';

function selectedPlantReducer(selectedPlant = {}, action) {
  let updateSelectedPlant = selectedPlant;
  switch (action.type) {
    case actionTypes.LOAD_PLANT:
      updateSelectedPlant = action.selectedPlant;
      break;
    case actionTypes.ADD_PLANT:
      updateSelectedPlant = action.plant;
      break;
    default:
      updateSelectedPlant;
      break;
  }
  return updateSelectedPlant;
}

export default selectedPlantReducer;
