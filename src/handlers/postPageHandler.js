const {createPage} = require("../controllers/postPageControllers");
const createPagetHandler = async (req, res) => {
  const {title, users} = req.body;
  try {
    const response = await createPage(title, users);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
module.exports = {createPagetHandler};