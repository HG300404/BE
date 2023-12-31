const express = require("express");
const router = express.Router();
const gameController = require("../controllers/GameController");
const { authMiddleware } = require("../middleware/authMiddleware");
router.post("/create", gameController.createGame);
router.put("/update/:id", gameController.updateGame);
router.delete("/delete/:id", gameController.deleteGame);
router.get("/get-all", gameController.getAllGame);
router.get("/details/:id", gameController.getDetailsGame);
router.post("/delete-many", gameController.deleteManyProduct);
router.get("/get-all-type", gameController.getAllType);
module.exports = router;
