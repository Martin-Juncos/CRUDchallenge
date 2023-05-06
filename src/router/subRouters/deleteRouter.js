const {Router} = require("express");
const {deleteProductHandler} = require("../../handlers/deleteHandlers");

const deleteRouter = Router();

deleteRouter.delete("/:id", deleteProductHandler);

module.exports = deleteRouter;
