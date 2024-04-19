"use strict";
/**
 * include model from sequelize
 */
const {
  Model
} = require('sequelize');
/**
 * exporting model to create
 * @param sequelize sequelize library 
 * @param DataTypes data type of the fields in table
 * @returns User model
 */
module.exports = (sequelize, DataTypes) => {
  /**
   * Class to create a User object
   */
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Project, {
        foreignKey: "userId",
      });
    }
  }
  /**
   * User model data
   */
  User.init({
   
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
  
    {
      sequelize,
      modelName: "User",
    });
  return User;
};