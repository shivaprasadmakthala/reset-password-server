var express = require("express");
var router = express.Router();
var userModule = require("../modules/userModule");

router.post("/register", userModule.register);
router.post("/login", userModule.login);
router.post("/forget-password",userModule.forgetPassword);
router.put("/reset-password/:token",userModule.resetPassword);

module.exports = router;