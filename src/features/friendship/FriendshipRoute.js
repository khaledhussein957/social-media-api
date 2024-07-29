import express from "express";
import {CreateFriendship, GetFriendships, UpdateFriendship, DeleteFriendship} from "./FriendshipController.js";

const router = express.Router();


router.post("/follow", CreateFriendship);
router.get("/following", GetFriendships);
router.put("/following/:id", UpdateFriendship);
router.delete("/unfollow/:id", DeleteFriendship);

export default router;