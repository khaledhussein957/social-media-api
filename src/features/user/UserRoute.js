import express from "express";
import { registerUser, loginUser, followUser, unFollowUSer, getFollowingUsers, getFollowedUsers, GetAllUsers, getProfile, updateProfile, deleteProfile} from './UserController.js'
import jwtAuth from "../../middleware/jwtAuht.js";



const router = express.Router();

// register
router.post("/register-user", registerUser);
// login
router.post("/login-user", loginUser);
// follow
router.post('/users/follow', followUser);
// unfollow
router.post('/users/unfollow', unFollowUSer);
// get following
router.get('/users/following/:userId', getFollowingUsers);
// get followed 
router.get('/users/followed/:userId', getFollowedUsers);
// get profile
router.get("/users/me" , getProfile);
// get all user
router.get("/users/all-user", GetAllUsers);
// update profile
router.put("/users/update-profile" , updateProfile);
// delete profile
router.delete("/users/delete-profile" , deleteProfile);

export default router;