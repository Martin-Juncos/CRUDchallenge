const products = require("../utils/data.json");

const infocleaner = (array) => {
  return array.map((element) => {
    return {
      name: element.name,
      email: element.email,
      description: element.description,
      price: element.price,
      image: element.image,
    };
  });
};

const getAllProducts = async () => {
  return products;
};

const getProductByName = async (name) => {
  const infoApi = products;

  const cleanedProducts = infocleaner(infoApi);

  const filtererdProduct = cleanedProducts.filter(
    (product) => product.name.toLowerCase() === name.toLowerCase()
  );

  return filtererdProduct;
};

const getById = (id) => {
  // "3" params
  // 3 json

  return products.filter((product) => product.id === Number(id));
};

module.exports = {getAllProducts, getProductByName, getById};
