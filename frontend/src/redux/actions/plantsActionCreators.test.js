import axios from 'axios';
import {
  loadPlants,
  addPlant,
  deletePlant,
  updatePlant,
  loadPlant,
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
    const plant = {name: 'kentia'};
    const dispatch = jest.fn();
    const data = {name: 'kentia'};
    axios.post.mockResolvedValue({data});
    await addPlant(plant)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_PLANT',
      plant: {name: 'kentia'},
    });
  });

  test('when rejected, then return PLANTS_ERROR', async () => {
    const plant = {name: 'kentia'};
    const dispatch = jest.fn();
    axios.post.mockRejectedValue('error');
    await addPlant(plant)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'PLANTS_ERROR'});
  });
});

describe('Given deletePlant function, ', () => {
  test('when resolved, dispatch an object with type: DELETE_PLANT and plantId', async () => {
    const plantId = 1;
    const dispatch = jest.fn();
    axios.delete.mockResolvedValue();
    await deletePlant(plantId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'DELETE_PLANT',
      plantId,
    });
  });

  test('when rejected, then return PLANTS_ERROR', async () => {
    const plantId = 1;
    const dispatch = jest.fn();
    axios.delete.mockRejectedValue('error');
    await deletePlant(plantId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'PLANTS_ERROR'});
  });
});

describe('Given updatePlant function, ', () => {
  test('when resolved, dispatch an object with type: UPDATE_PLANT and plant: data', async () => {
    const plant = {name: 'potus', plantId: 1};
    const dispatch = jest.fn();
    const data = {name: 'kentia', plantId: 1};
    axios.put.mockResolvedValue({data});
    await updatePlant(plant)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_PLANT',
      plant: {name: 'kentia', plantId: 1},
    });
  });

  test('when rejected, then return PLANTS_ERROR', async () => {
    const plant = {name: 'kentia', plantId: 1};
    const dispatch = jest.fn();
    axios.put.mockRejectedValue('error');
    await updatePlant(plant)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'PLANTS_ERROR'});
  });
});

describe('Given loadPlant function, ', () => {
  test('when resolved, dispatch an object with type: LOAD_PLANT and plant: data', async () => {
    const plantId = 1;
    const dispatch = jest.fn();
    const data = {name: 'kentia', plantId: 1};
    axios.mockResolvedValue({data});
    await loadPlant(plantId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_PLANT',
      plant: {name: 'kentia', plantId: 1},
    });
  });

  test('when rejected, then return PLANTS_ERROR', async () => {
    const plantId = 1;
    const dispatch = jest.fn();
    axios.mockRejectedValue('error');
    await loadPlant(plantId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({type: 'PLANTS_ERROR'});
  });
});
