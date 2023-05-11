// const {updateProduct} = require("../controllers/putController");

// const updateProductHandler = async (req, res) => {
//   const {id, price, description, image, name} = req.body;

//   try {
//     const response = await updateProduct(id, name, description, price, image);
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(400).json({error: error.message});
//   }
// };

// module.exports = {updateProductHandler};

const {putUser} = require("../controllers/putController");

const updateUsertHandler = async (req, res) => {
const {id, name, email, phone, genre} = req.body;
try {
  const updateUser = await putUser(id, name, email, phone, genre);
  res.status(200).send(updateUser);
} catch (error) {
  res.status(400).json({error: error.message});
}
}
module.exports = {updateUsertHandler};