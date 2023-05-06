const {deleteProduct} = require("../controllers/deleteControllers");

const deleteProductHandler = async (req, res) => {
  const {id} = req.params;

  try {
    const response = await deleteProduct(id);
    res.status(200).send(`El producto con el Id ${id} fue eliminado exitosamente`);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {deleteProductHandler};
