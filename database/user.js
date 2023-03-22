const sequelize = require("./index");
const { DataTypes, DATE } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: DataTypes.STRING,
    apiKey: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  },
  { timestamps: true, paranoid: true }
);

module.exports = User;
