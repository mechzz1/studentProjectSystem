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

    }
  }
  /**
   * User model data
   */
  User.init({
      /**
       * firstName of the user
       */
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      /**
       * lastName of the user
       */
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      /**
       * email of the user
       */
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      /**
       * login password of the user
       */
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    /**
     * name of the model
     */
    {
      sequelize,
      modelName: "User",
    });
  return User;
};