import express from "express";
import {CreateFriendship, GetFriendships, UpdateFriendship, DeleteFriendship} from "./FriendshipController.js";

const router = express.Router();

// router.use(jwtAuth); // apply jwtAuth middleware to all routes


router.post("/friendships", CreateFriendship);
router.get("/friendships", GetFriendships);
router.put("/friendships/:id", UpdateFriendship);
router.delete("/friendships/:id", DeleteFriendship);

export default router;