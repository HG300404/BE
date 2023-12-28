const Order = require("../models/OrderGame");

const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    console.log("newOrder", newOrder);
    //     const {
    //       name,
    //       image,
    //       type,
    //       price,
    //       platform,
    //       rating,
    //       description,
    //       discount,
    //       selled,
    //       releasedDate,
    //     } = newGame;
    //     try {
    //       const checkGame = await Game.findOne({
    //         name: name,
    //       });
    //       if (checkGame != null) {
    //         resolve({
    //           status: "OK",
    //           message: "The name of game is ready",
    //         });
    //       }

    //       const createGame = await Game.create({
    //         name,
    //         image,
    //         type,
    //         price,
    //         platform,
    //         rating,
    //         description,
    //         discount,
    //         selled,
    //         releasedDate,
    //       });
    //       if (createGame) {
    //         resolve({
    //           status: "OK",
    //           message: "SUCCESS",
    //           data: createGame,
    //         });
    //       }
    //     } catch (e) {
    //       reject(e);
    //     }
  });
};

module.exports = {
  createOrder,
};
