const Game = require("../models/GameModel");

const createGame = (newGame) => {
  return new Promise(async (resolve, reject) => {
    const {
      name,
      image,
      type,
      price,
      platform,
      rating,
      description,
      releasedDate,
    } = newGame;
    try {
      const checkGame = await Game.findOne({
        name: name,
      });
      if (checkGame != null) {
        resolve({
          status: "OK",
          message: "The name of game is ready",
        });
      }

      const createGame = await Game.create({
        name,
        image,
        type,
        price,
        platform,
        rating,
        description,
        releasedDate,
      });
      if (createGame) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createGame,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const updateGame = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkGame = await Game.findOne({ _id: id });
      if (checkGame === null) {
        resolve({
          status: "OK",
          message: "The game is not defined",
        });
      }
      const updatedGame = await Game.findByIdAndUpdate(id, data, {
        new: true,
      });
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updatedGame,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const deleteGame = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkGame = await Game.findOne({ _id: id });
      if (checkGame === null) {
        resolve({
          status: "OK",
          message: "The game is not defined",
        });
      }
      await Game.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete game success",
      });
    } catch (e) {
      reject(e);
    }
  });
};
const getAllGame = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalGame = await Game.countDocuments();

      if (filter) {
        const label = filter[0];
        const allGameFilter = await Game.find({
          [label]: { $regex: filter[1] },
        })
          .limit(limit)
          .skip(page * limit);

        resolve({
          status: "OK",
          message: "SUCCESS",
          data: allGameFilter,
          total: totalGame,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalGame / limit),
        });
      }
      if (sort) {
        const objectSort = {};
        objectSort[sort[1]] = sort[0];

        const allGameSort = await Game.find()
          .limit(limit)
          .skip(page * limit)
          .sort(objectSort);
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: allGameSort,
          total: totalGame,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalGame / limit),
        });
      }
      const allGame = await Game.find()
        .limit(limit)
        .skip(page * limit)
        .sort({ name: sort });
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: allGame,
        total: totalGame,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalGame / limit),
      });
    } catch (e) {
      reject(e);
    }
  });
};
const getDetailsGame = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const game = await Game.findOne({ _id: id });
      if (game === null) {
        resolve({
          status: "OK",
          message: "The game is not defined",
        });
      }
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: game,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createGame,
  updateGame,
  deleteGame,
  getAllGame,
  getDetailsGame,
};
