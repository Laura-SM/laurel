const { Router } = require('express');
const usersController = require('../controllers/users.controller')();

function usersRouter() {
  const routes = Router();

  routes
    .route('/')
    .post(usersController.createOneUser);

  routes
    .route('/:userId')
    .get(usersController.getOneUserById)
    .put(usersController.updateOneUserById)
    .delete(usersController.deleteOneUserById);

  return routes;
}

module.exports = usersRouter();
