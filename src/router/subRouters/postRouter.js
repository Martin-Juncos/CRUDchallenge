const {Router} = require("express");
// const {createProductHandler} = require("../../handlers/postHandlers");
const {createUsertHandler} = require("../../handlers/postHandlers");
const postRouter = Router();
postRouter.post("/", createUsertHandler);
module.exports = postRouter;
