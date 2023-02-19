// const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

// const Board = sequelize.define('Board', {
//   type: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   rating: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   }
// });

// module.exports = Board;

// Board.belongsToMany(Cheese, { through: 'BoardCheeses' });
// Cheese.belongsToMany(Board, { through: 'BoardCheeses' });

// const Cheese = require('./Cheese');
// const { DataTypes } = require('sequelize');
// const sequelize = require('./db');

// const Board = sequelize.define('Board', {
//     type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     rating: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   });

// Board.belongsToMany(Cheese, { through: 'BoardCheeses' });
// Cheese.belongsToMany(Board, { through: 'BoardCheeses' });



const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');
const Cheese = require('./Cheese');

const Board = sequelize.define('Board', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const User = require('./User');

Board.belongsTo(User);
Board.belongsToMany(Cheese, { through: 'BoardCheeses' });
Cheese.belongsToMany(Board, { through: 'BoardCheeses' });

module.exports = Board;
  