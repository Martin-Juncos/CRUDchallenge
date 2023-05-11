// const products = require("../utils/data.json");

// const path = require("path");
// const fsPromises = require("fs/promises");

// const dataFilePath = path.join(process.cwd(), "/src/utils/data.json");

// const updateProduct = async (id, name, description, price, image) => {
//   let found = products.find((product) => product.id === Number(id));
//   console.log(found)

//   if (!found) return "Product not found";

//   const updatedObj = products.map((obj) => {
//     if (obj.id === Number(id)) {
//       obj.id = obj.id;
//       obj.name = name;
//       obj.price = price;
//       obj.description = description;
//       obj.image = image;
//     }
//     return obj;
//   });

//   const updatedData = JSON.stringify(updatedObj);

//   await fsPromises.writeFile(dataFilePath, updatedData);

//   return products;
// };

// module.exports = {updateProduct};

const {User} = require('../db')
const putUser = async (id, name, email, phone, genre)=>{
  let newPutUser = await User.findByPk(id)
  newPutUser.name = name
  newPutUser.email = email
  newPutUser.phone = phone
  newPutUser.genre = genre
  await newPutUser.save()
  return newPutUser
}

module.exports = {putUser}
