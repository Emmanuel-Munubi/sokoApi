const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50], // Limit role name length between 1 and 50 characters
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50], // Limit role name length between 1 and 50 characters
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure email uniqueness
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Default to false, indicating account is inactive
    },
  },
  {
    // Other model options go here
    timestamps: true, // Automatically manage created_at and updated_at fields
    paranoid: true, // Soft delete support
    underscored: true, // Use snake_case for column names
  }
);

module.exports = User;

//sync the model with the database
User.sync({ force: false }).then(() => {
  console.log("User table created");
});
