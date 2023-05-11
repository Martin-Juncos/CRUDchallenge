const {Router} = require("express");
const {deleteUserHandler} = require("../../handlers/deleteHandlers");

const deleteRouter = Router();

deleteRouter.delete("/:id", deleteUserHandler);

module.exports = deleteRouter;
