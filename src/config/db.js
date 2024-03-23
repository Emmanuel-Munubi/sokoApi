const { Sequelize } = require("sequelize");

// Database connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data.sqlite",
  logging: console.log, // For debugging
});


module.exports = sequelize;