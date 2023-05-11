const server = require("./src/app");
const {database} = require('./src/db')

const PORT = 3001;

database.sync({ force: true }).then(()=>{
  server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
})


