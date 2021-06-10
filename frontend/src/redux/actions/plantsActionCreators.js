import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://192.168.0.57:2021/plants';

export function loadPlants() {
  return async dispatch => {
    try {
      const {data} = await axios(url);
      dispatch({
        type: actionTypes.LOAD_PLANTS,
        plants: data,
      });
    } catch (error) {
      dispatch({
        type: 'PLANTS_ERROR',
      });
    }
  };
}

export function addPlant(plant) {
  return async dispatch => {
    try {
      const {data} = await axios.post(url, plant);
      dispatch({
        type: actionTypes.ADD_PLANT,
        plant: data,
      });
    } catch (error) {
      dispatch({
        type: 'PLANTS_ERROR',
      });
    }
  };
}

export function deletePlant(plantId) {
  return async dispatch => {
    try {
      await axios.delete(`${url}/${plantId}`);
      dispatch({
        type: actionTypes.DELETE_PLANT,
        plantId,
      });
    } catch (error) {
      dispatch({
        type: 'PLANTS_ERROR',
      });
    }
  };
}

export function updatePlant(plant) {
  return async dispatch => {
    try {
      const {data} = await axios.put(`${url}/${plant._id}`, plant);
      dispatch({
        type: actionTypes.UPDATE_PLANT,
        plant: data,
      });
    } catch (error) {
      dispatch({
        type: 'PLANTS_ERROR',
      });
    }
  };
}

export function loadPlant(plantId) {
  return async dispatch => {
    try {
      const {data} = await axios(`${url}/${plantId}`);
      dispatch({
        type: actionTypes.LOAD_PLANT,
        selectedPlant: data,
      });
    } catch (error) {
      dispatch({
        type: 'PLANTS_ERROR',
      });
    }
  };
}
