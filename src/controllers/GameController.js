const GameService = require("../services/GameService");
const createGame = async (req, res) => {
  try {
    const {
      name,
      image,
      type,
      price,
      platform,
      rating,
      description,
      releasedDate,
    } = req.body;

    if (
      !name ||
      !image ||
      !type ||
      !price ||
      !platform ||
      !rating ||
      !description
      //   !releasedDate
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required1",
      });
    }

    const response = await GameService.createGame(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
const updateGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const data = req.body;
    if (!gameId) {
      return res.status(200).json({
        status: "ERR",
        message: "The gameId is required",
      });
    }
    const response = await GameService.updateGame(gameId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
const deleteGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    if (!gameId) {
      return res.status(200).json({
        status: "ERR",
        message: "The gameId is required",
      });
    }
    const response = await GameService.deleteGame(gameId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
const getAllGame = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const response = await GameService.getAllGame(
      Number(limit) || 8,
      Number(page) || 0,
      sort,
      filter
    );

    return res.status(200).json(response);
  } catch (e) {
    console.log("loi", e);
    return res.status(404).json({ message: e });
  }
};
const getDetailsGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    if (!gameId) {
      return res.status(200).json({
        status: "ERR",
        message: "The gameId is required",
      });
    }
    const response = await GameService.getDetailsGame(gameId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({ message: e });
  }
};
module.exports = {
  createGame,
  updateGame,
  deleteGame,
  getAllGame,
  getDetailsGame,
};
