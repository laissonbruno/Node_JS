'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    static associate(models) {
      Niveis.hasMany(models.Matriculas, {foreignKey: 'nivel_id'})
    }
  }
  Niveis.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveis',
    paranoid: true
  });
  return Niveis;
};