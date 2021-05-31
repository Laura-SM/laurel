const debug = require('debug')('server:users.controller');
const User = require('../models/user.model');

function usersController() {
  async function createOneUser(req, res) {
    try {
      const newUser = await new User(req.body).save();
      res.status(200);
      res.json(newUser);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function getOneUserById(req, res) {
    try {
      const userById = await User.findById(
        req.params.userId,
      );
      res.status(200);
      res.json(userById);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function updateOneUserById(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true },
      );
      res.status(200);
      res.json(updatedUser);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function deleteOneUserById(req, res) {
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.status(200);
      res.json();
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  return {
    createOneUser,
    getOneUserById,
    updateOneUserById,
    deleteOneUserById,
  };
}

module.exports = usersController;
