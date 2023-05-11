// const {deleteProduct} = require("../controllers/deleteControllers");

// const deleteProductHandler = async (req, res) => {
//   const {id} = req.params;

//   try {
//     const response = await deleteProduct(id);
//     res.status(200).send(`El producto con el Id ${id} fue eliminado exitosamente`);
//   } catch (error) {
//     res.status(400).json({error: error.message});
//   }
// };

// module.exports = {deleteProductHandler};

const { deleteUser } = require("../controllers/deleteControllers");

const deleteUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteUser(id);
    res.status(200).send(deleted);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {deleteUserHandler};
