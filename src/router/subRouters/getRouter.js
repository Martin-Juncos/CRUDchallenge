const {Router} = require("express");
const {getProducts, getDetail} = require("../../handlers/gethandlers");

const getRouter = Router();

// query ? /get/?name="pantalones" = /get/
getRouter.get("/", getProducts);

// params :   /get/3
getRouter.get("/:id", getDetail);

module.exports = getRouter;
