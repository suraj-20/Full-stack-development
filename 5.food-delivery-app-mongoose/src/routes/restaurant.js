
const express = require("express");
const controller = require("../controllers/restaurant");
const menuController = require("../controllers/menu");
const router = express.Router();

router.post("/", controller.add);
router.get("/:page", controller.get);
router.post("/menu", menuController.add);

module.exports = router;