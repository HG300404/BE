const UserRouter = require("./UserRouter");
const GameRouter = require("./GameRouter");
const OrderRouter = require("./OrderRouter");
const routes = (app) => {
  app.use("/api/user", UserRouter);
  app.use("/api/game", GameRouter);
  app.use("/api/order", OrderRouter);
};
module.exports = routes;
