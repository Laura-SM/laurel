import axios from 'axios';
import {
  loadPlants,
  addPlant,
  deletePlant,
  // updatePlant,
  // loadPlant,
} from './plantsActionCreators';

jest.mock('axios');

describe('Given loadPlants function, ', () => {
  test('when resolved, then dispatch an object with type: LOAD_PLANTS and plants: data', async () => {
    const dispatch = jest.fn();
    const data = [{name: 'kentia'}];
    axios.mockResolvedValue({data});
    await loadPlants()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_PLANTS',
      plants: [{name: 'kentia'}],
    });
  });

  test('when rejected, then return PLANTS_ERROR', async () => {
    const dispatch = jest.fn();
    axios.mockRejectedValue('error');
    await loadPlants()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'PLANTS_ERROR'});
  });
});

describe('Given addPlant function, ', () => {
  test('when resolved, then dispatch an object with type: ADD_PLANT and plant: data', async () => {
    const dispatch = jest.fn();
    const data = {name: 'kentia'};
    axios.post.mockResolvedValue({data});
    await addPlant()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_PLANT',
      plant: {name: 'kentia'},
    });
  });

  test('when rejected, then return PLANTS_ERROR', async () => {
    const dispatch = jest.fn();
    axios.post.mockRejectedValue('error');
    await addPlant()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'PLANTS_ERROR'});
  });
});

describe('Given deletePlant function, ', () => {
  test('when resolved, dispatch an object with type: DELETE_PLANT and plantId', async () => {
    const dispatch = jest.fn();
    const plantId = 1;
    axios.delete.mockResolvedValue(plantId);
    await deletePlant()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'DELETE_PLANT', plantId});
  });

  test('when rejected, then return PLANTS_ERROR', async () => {
    const dispatch = jest.fn();
    axios.delete.mockRejectedValue('error');
    await deletePlant()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'PLANTS_ERROR'});
  });
});
