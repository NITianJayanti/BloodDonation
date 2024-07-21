const express = require("express");
const { loginUser } = require("../controllers/auth");
const { registerUser } = require("../controllers/auth");
const router = express.Router();
// login router
router.post("/login", loginUser);

// register router
router.post("/register", registerUser);

module.exports = router;
