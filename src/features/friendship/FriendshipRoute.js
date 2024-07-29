import express from "express";
import {CreateFriendship, GetFriendships, UpdateFriendship, DeleteFriendship} from "./FriendshipController.js";

const router = express.Router();

// router.use(jwtAuth); // apply jwtAuth middleware to all routes


router.post(`/users/${id}/follow`, CreateFriendship);
// router.get("/friendships", GetFriendships);
// router.put("/friendships/:id", UpdateFriendship);
router.delete(`/users/${id}/unfollow`, DeleteFriendship);

export default router;