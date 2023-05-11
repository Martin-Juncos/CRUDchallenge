// const {createProduct} = require("../controllers/postControllers");

// const createProductHandler = async (req, res) => {
//   const {name, price, description, image} = req.body;

//   try {
//     const response = await createProduct(name, price, description, image);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({error: error.message});
//   }
// };

const {createUser} = require("../controllers/postControllers");
const createUsertHandler = async (req, res) => {
  const {name, email, phone, genre} = req.body;
  try {
    const response = await createUser(name, email, phone, genre);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
module.exports = {createUsertHandler};
