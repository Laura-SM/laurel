const debug = require('debug')('server:plants.controller');
const Plant = require('../models/plant.model');

function plantsController() {
  async function getAllPlants(req, res) {
    try {
      const plants = await Plant.find();
      res.status(200);
      res.json(plants);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function createOnePlant(req, res) {
    try {
      const newPlant = await new Plant(req.body).save();
      res.status(200);
      res.json(newPlant);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function getOnePlantById(req, res) {
    try {
      const plantById = await Plant.findById(
        req.params.plantId,
      );
      res.status(200);
      res.json(plantById);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function updateOnePlantById(req, res) {
    try {
      const updatedPlant = await Plant.findByIdAndUpdate(
        req.params.plantId,
        req.body,
        { new: true },
      );
      res.status(200);
      res.json(updatedPlant);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function deleteOnePlantById(req, res) {
    try {
      await Plant.findByIdAndDelete(req.params.plantId);
      res.status(200);
      res.json();
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  return {
    getAllPlants,
    createOnePlant,
    getOnePlantById,
    updateOnePlantById,
    deleteOnePlantById,
  };
}

module.exports = plantsController;
