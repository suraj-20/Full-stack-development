
// Routing of express.
const express = require("express")
const controller = require("../controllers/user")

// Creteing router.
const router = express.Router();

router.post("/register", controller.register);
router.post("/login", controller.login);

module.exports = router;