'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart)
    }
  };
  User.init({
    username: DataTypes.STRING,
    user_password: DataTypes.STRING,
    email: DataTypes.STRING,
    user_nickname: DataTypes.STRING,
    user_address: DataTypes.TEXT,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
