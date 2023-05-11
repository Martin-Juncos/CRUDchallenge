const { DataTypes } = require("sequelize");
module.exports = (database) => {
  database.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
      },
      genre: {
        type: DataTypes.ENUM("male", "female"),
      },
    },
    {
      timestamps: false,
    }
  );
};
