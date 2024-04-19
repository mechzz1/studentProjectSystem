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
  class Products extends Model {
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
   * ExpenseHead model data
   */
  Products.init({
     
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      actualPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discountedPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image1:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    image2:{
         type: DataTypes.STRING,
         allowNull: true,
    },
    image4:{
        type: DataTypes.STRING,
        allowNull: true,
   },
   image4:{
    type: DataTypes.STRING,
    allowNull: true,
    },
    inStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:1,
    },
    
    },
    /**
     * name of the model
     */
    {
      sequelize,
      modelName: "Products",
    });
  return Products;
};