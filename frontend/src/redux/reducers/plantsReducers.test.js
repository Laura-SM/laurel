import plantsReducer from './plantsReducer';
import actionTypes from '../actions/actionTypes';

describe('Given plantsReducer function ', () => {
  test('when resolved with LOAD_PLANTS, then should return updatedPlants', () => {
    expect(
      plantsReducer([], {
        type: actionTypes.LOAD_PLANTS,
        plants: [{name: 'kentia'}],
      }),
    ).toEqual([{name: 'kentia'}]);
  });

  test('when resolved with ADD_PLANT, then should return updatedPlants', () => {
    expect(
      plantsReducer([{name: 'kentia'}], {
        type: actionTypes.ADD_PLANT,
        plant: {name: 'potus'},
      }),
    ).toEqual([{name: 'kentia'}, {name: 'potus'}]);
  });

  test('when resolved with DELETE_PLANT, then should return updatedPlants', () => {
    expect(
      plantsReducer(
        [
          {name: 'kentia', _id: 1},
          {name: 'potus', _id: 2},
        ],
        {
          type: actionTypes.DELETE_PLANT,
          plantId: 2,
        },
      ),
    ).toEqual([{name: 'kentia', _id: 1}]);
  });

  test('when resolved with UPDATE_PLANT, then should return updatedPlants', () => {
    expect(
      plantsReducer(
        [
          {name: 'kentia', _id: 1},
          {name: 'potus', _id: 2},
        ],
        {
          type: actionTypes.UPDATE_PLANT,
          plant: {name: 'sanseviera', _id: 2},
        },
      ),
    ).toEqual([
      {name: 'kentia', _id: 1},
      {name: 'sanseviera', _id: 2},
    ]);
  });

  test('when resolved with default, then should return updatedPlants', () => {
    expect(
      plantsReducer(undefined, {
        type: actionTypes.PLANTS_ERROR,
      }),
    ).toEqual([]);
  });
});
