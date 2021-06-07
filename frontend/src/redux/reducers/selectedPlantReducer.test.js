import selectedPlantReducer from './selectedPlantReducer';
import actionTypes from '../actions/actionTypes';

describe('Given selectedPlantReducer function ', () => {
  test('when resolved with LOAD_PLANT, then should return selectedPlant', () => {
    expect(
      selectedPlantReducer(
        {},
        {
          type: actionTypes.LOAD_PLANT,
          plant: {name: 'kentia'},
        },
      ),
    ).toEqual({name: 'kentia'});
  });

  test('when resolved with default, then should return updatedPlants', () => {
    expect(
      selectedPlantReducer(undefined, {
        type: actionTypes.PLANTS_ERROR,
      }),
    ).toEqual({});
  });
});
