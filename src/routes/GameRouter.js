const express = require("express");
const router = express.Router();
const gameController = require("../controllers/GameController");
const { authMiddleware } = require("../middleware/authMiddleware");
router.post("/create", gameController.createGame);
router.put("/update/:id", authMiddleware, gameController.updateGame);
router.delete("/delete/:id", authMiddleware, gameController.deleteGame);
router.get("/get-all", gameController.getAllGame);
router.get("/details/:id", gameController.getDetailsGame);
router.delete("/delete-many", authMiddleware, gameController.deleteManyProduct);

module.exports = router;
