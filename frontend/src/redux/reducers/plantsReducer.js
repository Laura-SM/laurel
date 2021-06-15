import actionTypes from '../actions/actionTypes';

function plantsReducer(plants = [], action) {
  let updatedPlants = [];
  switch (action.type) {
    case actionTypes.LOAD_PLANTS:
      updatedPlants = action.plants;
      break;
    case actionTypes.ADD_PLANT:
      updatedPlants = [...plants, action.plant];
      break;
    case actionTypes.DELETE_PLANT:
      updatedPlants = plants.filter(plant => plant._id !== action.plantId);
      break;
    case actionTypes.UPDATE_PLANT:
      updatedPlants = plants.map(plant =>
        plant._id === action.plant._id ? {...plant, ...action.plant} : plant,
      );
      break;
    default:
      updatedPlants = plants;
      break;
  }
  return updatedPlants;
}

export default plantsReducer;
