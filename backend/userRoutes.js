// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("./controller");

router.post("/create", userController.newUserCreate);
router.put("/edit/:email", userController.editUser);
router.delete("/delete/:email", userController.deleteUser);
router.get("/getAll", userController.getAllUsers);
router.post("/login", userController.loginUser);

module.exports = router;
