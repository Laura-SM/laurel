import axios from 'axios';
import actionTypes from './actionTypes';
import {env} from '../../../.env.js';

const url = env.REACT_APP_PORT;

export function loadPlants() {
  return async dispatch => {
    try {
      const {data} = await axios(`${url}/plants`);
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
      const {data} = await axios.post(`${url}/plants`, plant);
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
      await axios.delete(`${url}/plants/${plantId}`);
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
      const {data} = await axios.put(`${url}/plants/${plant._id}`, plant);
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
      const {data} = await axios(`${url}/plants/${plantId}`);
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
