// const products = require("../utils/data.json");

// const fsPromises = require("fs/promises");
// const path = require("path");

// const dataFilePath = path.join(process.cwd(), "/src/utils/data.json");

// const createProduct = async (name, price, description, image) => {
//   const lastId = products.at(-1).id;

//   const newProduct = {
//     id: lastId + 1,
//     name: name,
//     price: price,
//     description: description,
//     image: image,
//   };

//   products.push(newProduct);

//   const updatedData = JSON.stringify(products);

//   await fsPromises.writeFile(dataFilePath, updatedData);

//   return products;
// };

// module.exports = {createProduct};

const {User} = require('../db')
const createUser = async (name, email, phone, genre)=>{
  const newUser = await User.create({name, email, phone, genre})
  return newUser
}

module.exports = {createUser}