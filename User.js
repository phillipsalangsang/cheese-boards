// const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

// const User = sequelize.define('User', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   }
// });

// module.exports = User;

// User.hasMany(Board);
// Board.belongsTo(User);

// const { DataTypes } = require('sequelize');
// const sequelize = require('./db');
// const Board = require('./Board');

// const User = sequelize.define('User', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// User.hasMany(Board);
// Board.belongsTo(User);



const Board = require('./Board');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database');
const Cheese = require('./Cheese');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Board);
Board.belongsTo(User);

module.exports = User;