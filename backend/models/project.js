"use strict";

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Project extends Model {

    static associate(models) {
      // define association here
      Project.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
 
  Project.init({
   
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phase: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
            'design',
            'development',
            'testing', 'deployment','completed',
        ],
    },

    },
  
    {
      sequelize,
      modelName: "Project",
    });
  return Project;
};