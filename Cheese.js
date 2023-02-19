// const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

// const Cheese = sequelize.define('Cheese', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// module.exports = Cheese;

// Cheese.belongsToMany(Board, { through: 'BoardCheeses' });
// Board.belongsToMany(Cheese, { through: 'BoardCheeses' });



const Board = require('./Board');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');

const Cheese = sequelize.define('Cheese', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

Cheese.belongsToMany(Board, { through: 'BoardCheeses' });
Board.belongsToMany(Cheese, { through: 'BoardCheeses' });
