import express from "express";
import {CreateFriendship, GetFriendships, UpdateFriendship, DeleteFriendship} from "./FriendshipController.js";

const router = express.Router();


router.post("/friendships", CreateFriendship);
router.get("/friendships", GetFriendships);
router.put("/friendships/:id", UpdateFriendship);
router.delete("/friendships/:id", DeleteFriendship);

export default router;