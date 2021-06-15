import selectedPlantReducer from './selectedPlantReducer';
import actionTypes from '../actions/actionTypes';

describe('Given selectedPlantReducer function ', () => {
  test('when resolved with LOAD_PLANT, then should return {name: "kentia"}', () => {
    expect(
      selectedPlantReducer(
        {},
        {
          type: actionTypes.LOAD_PLANT,
          selectedPlant: {name: 'kentia'},
        },
      ),
    ).toEqual({name: 'kentia'});
  });

  test('when resolved with ADD_PLANT, then should return {name: "kentia"}', () => {
    expect(
      selectedPlantReducer(
        {name: 'potus'},
        {
          type: actionTypes.ADD_PLANT,
          plant: {name: 'kentia'},
        },
      ),
    ).toEqual({name: 'kentia'});
  });

  test('when resolved with default, then should return {}', () => {
    expect(
      selectedPlantReducer(undefined, {
        type: actionTypes.PLANTS_ERROR,
      }),
    ).toEqual({});
  });
});
