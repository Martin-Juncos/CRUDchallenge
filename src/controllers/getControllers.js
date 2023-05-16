// const products = require("../utils/data.json");

// const infocleaner = (array) => {
//   return array.map((element) => {
//     return {
//       name: element.name,
//       email: element.email,
//       description: element.description,
//       price: element.price,
//       image: element.image,
//     };
//   });
// };

// const getAllProducts = async () => {
//   return products;
// };

// const getProductByName = async (name) => {
//   const infoApi = products;

//   const cleanedProducts = infocleaner(infoApi);

//   const filtererdProduct = cleanedProducts.filter(
//     (product) => product.name.toLowerCase() === name.toLowerCase()
//   );

//   return filtererdProduct;
// };

// const getById = (id) => {
//   // "3" params
//   // 3 json

//   return products.filter((product) => product.id === Number(id));
// };

// module.exports = {getAllProducts, getProductByName, getById};


const { Op } = require("sequelize");
const { User, Page } = require("../db");

const getAllUsers = async () => {
  const users = await User.findAll({
    include: {
      model: Page,
      attributes : ['title'],
      through: {
        attributes : []
      }
    },
    
  });
  return users;
};
const getUserId = async (id) => {
  const userId = await User.findByPk(id);
  return userId;
};
const getUserName = async (name) => {
  const userByName = await User.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  return userByName;
};
module.exports = {
  getAllUsers,
  getUserId,
  getUserName,
};
