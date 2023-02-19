// const sequelize = require('./db');

// const User = require('./User');
// const Board = require('./Board');
// const Cheese = require('./Cheese');

// describe('eager loading', () => {
//   beforeAll(async () => {
//     await sequelize.sync({ force: true });
//   });

//   it('loads a board with its cheeses', async () => {
//     const board = await Board.create({
//       type: 'Cheese board',
//       description: 'A delicious assortment of cheeses',
//       rating: 5
//     });

//     const cheese1 = await Cheese.create({
//       title: 'Brie',
//       description: 'Soft cheese'
//     });

//     const cheese2 = await Cheese.create({
//       title: 'Cheddar',
//       description: 'Hard cheese'
//     });

//     await board.addCheese(cheese1);
//     await board.addCheese(cheese2);

//     const loadedBoard = await Board.findOne({
//       where: { id: board.id },
//       include: Cheese
//     });

//     expect(loadedBoard.Cheeses.length).toBe(2);
//     expect(loadedBoard.Cheeses[0].title).toBe('Brie');
//     expect(loadedBoard.Cheeses[1].title).toBe('Cheddar');
//   });

//   it('loads a user with their boards', async () => {
//     const user = await User.create({
//       name: 'Louis S',
//       email: 'louis@test.com'
//     });

//     const board1 = await Board.create({
//       type: 'Cheese board',
//       description: 'A delicious assortment of cheeses',
//       rating: 5
//     });

//     const board2 = await Board.create({
//       type: 'Charcuterie board',
//       description: 'A tasty selection of meats',
//       rating: 4
//     });

//     await user.addBoard(board1);
//     await user.addBoard(board2);

//     const loadedUser = await User.findOne({
//       where: { id: user.id },
//       include: Board
//     });

//     expect(loadedUser.Boards.length).toBe(2);
//     expect(loadedUser.Boards[0].type).toBe('Cheese board');
//     expect(loadedUser.Boards[1].type).toBe('Charcuterie board');
//   });

//   it('loads a cheese with its board data', async () => {
//     const board = await Board.create({
//       type: 'Cheese board',
//       description: 'A delicious assortment of cheeses',
//       rating: 5
//     });

//     const cheese = await Cheese.create({
//       title: 'Brie',
//       description: 'Soft cheese'
//     });

//     await board.addCheese(cheese);

//     const loadedCheese = await Cheese.findOne({
//       where: { id: cheese.id },
//       include: Board
//     });

//     expect(loadedCheese.Boards.length).toBe(1);
//     expect(loadedCheese.Boards[0].description).toBe('A delicious assortment of cheeses');
//     expect(loadedCheese.Boards[0].rating).toBe(5);
//   });
// });

// describe('eager loading tests', () => {
//   it('should load a board with its cheeses', async () => {
//     const board = await Board.findOne({ where: { id: 1 }, include: Cheese });
//     console.log(board.Cheeses);
//   });

//   it('should load a user with its boards', async () => {
//     const user = await User.findOne({ where: { id: 1 }, include: Board });
//     console.log(user.Boards);
//   });

//   it('should load a cheese with its board data', async () => {
//     const cheese = await Cheese.findOne({ where: { id: 1 }, include: Board });
//     console.log(cheese.Boards);
//   });
// });



const sequelize = require('./database');
const User = require('./User');
const Board = require('./Board');
const Cheese = require('./Cheese');

describe('eager loading tests', () => {
  it('should load a board with its cheeses', async () => {
    const board = await Board.findOne({ where: { id: 1 }, include: Cheese });
    console.log(board.Cheeses);
  });

  it('should load a user with its boards', async () => {
    const user = await User.findOne({ where: { id: 1 }, include: Board });
    console.log(user.Boards);
  });

  it('should load a cheese with its board data', async () => {
    const cheese = await Cheese.findOne({ where: { id: 1 }, include: Board });
    console.log(cheese.Boards);
  });
});

Board.belongsToMany(Cheese, { through: 'BoardCheeses' });
Cheese.belongsToMany(Board, { through: 'BoardCheeses' });

