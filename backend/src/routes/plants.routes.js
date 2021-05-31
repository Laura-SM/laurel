const { Router } = require('express');
const plantsController = require('../controllers/plants.controller')();

function plantsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(plantsController.getAllPlants)
    .post(plantsController.createOnePlant);

  routes
    .route('/:plantId')
    .get(plantsController.getOnePlantById)
    .put(plantsController.updateOnePlantById)
    .delete(plantsController.deleteOnePlantById);

  return routes;
}

module.exports = plantsRouter();
