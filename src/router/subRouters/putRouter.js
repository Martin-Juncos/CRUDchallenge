const {Router} = require("express");
const {updateUsertHandler} = require("../../handlers/putHandlers");

const putRouter = Router();

putRouter.put("/", updateUsertHandler);

module.exports = putRouter;
