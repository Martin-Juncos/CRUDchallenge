const {Router} = require("express");
const {createPagetHandler} = require("../../handlers/postPageHandler");
const postPageRouter = Router();
postPageRouter.post("/", createPagetHandler);
module.exports = postPageRouter;
