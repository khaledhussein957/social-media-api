import express from "express";
import UserController from './UserController.js'


const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/profile", UserController.getProfile);
router.put("/profile", UserController.updateProfile);
router.delete("/profile", UserController.deleteProfile);

export default router;