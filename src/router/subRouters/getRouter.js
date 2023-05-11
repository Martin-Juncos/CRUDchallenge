const {Router} = require("express");
const {getUsers, getDetail} = require("../../handlers/gethandlers");

const getRouter = Router();

// query ? /get/?name=martin = /get/
getRouter.get("/", getUsers);

// params :   /get/3
getRouter.get("/:id", getDetail);

module.exports = getRouter;
