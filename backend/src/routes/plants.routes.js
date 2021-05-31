const { Router } = require('express');
const plantsController = require('../controllers/plants.controller')();

function plantsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(plantsController.getAll)
    .post(plantsController.createOne);

  routes
    .route('/:plantId')
    .get(plantsController.getById)
    .put(plantsController.updateById)
    .delete(plantsController.deleteById);

  return routes;
}

module.exports = plantsRouter();
