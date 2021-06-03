import actionTypes from '../actions/actionTypes';

function selectedPlantReducer(plant = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PLANT:
      return action.plant;

    default:
      return plant;
  }
}

export default selectedPlantReducer;
