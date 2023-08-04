'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Name cannot be null"
        },
        notEmpty: {
          msg: "Name cannot be empty"
        }
      },
      set(value) {
        this.setDataValue('name', value.charAt(0).toUpperCase() + value.slice(1));
      }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING(240),
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Millimeters cannot be null"
        },
        min: {
          args: [0],
          msg: "Millimeters must be at least 0"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};