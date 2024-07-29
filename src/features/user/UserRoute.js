import express from "express";
import UserController from './UserController.js'


const UserRouter = express.Router();

UserRouter.post("/register", UserController.register);
UserRouter.post("/login", UserController.login);
UserRouter.get("/profile", UserController.getProfile);
UserRouter.put("/profile", UserController.updateProfile);
UserRouter.delete("/profile", UserController.deleteProfile);

export default UserRouter;