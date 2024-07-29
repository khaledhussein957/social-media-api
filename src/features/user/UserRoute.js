import express from "express";
import { registerUser, loginUser, GetAllUsers, getProfile, updateProfile, deleteProfile} from './UserController.js'
import jwtAuth from "../../middleware/jwtAuht.js";



const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile" , getProfile);
router.get("/all", GetAllUsers);
router.put("/profile" , updateProfile);
router.delete("/profile" , deleteProfile);

export default router;