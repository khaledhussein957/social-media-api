import express from "express";
import { registerUser, loginUser, GetAllUsers, getProfile, updateProfile, deleteProfile} from './UserController.js'
import jwtAuth from "../../middleware/jwtAuht.js";



const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.get("/profile" , getProfile);
router.get("/all-user", GetAllUsers);
router.put("/update-profile" , updateProfile);
router.delete("/delete-profile" , deleteProfile);

export default router;