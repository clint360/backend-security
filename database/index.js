const Sequelize = require("sequelize");

const sequelize = new Sequelize("t360drinksdb", "t360drinksdb", "t360drinksdb", {
  host: "db4free.net",
  dialect: "mysql",
});

module.exports = sequelize;

